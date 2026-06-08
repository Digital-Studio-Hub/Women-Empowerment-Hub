import { type Express } from "express";
import { type Server } from "http";
import fs from "fs";
import path from "path";
import { nanoid } from "nanoid";

export async function setupVite(server: Server, app: Express) {
  const [viteModule, reactPlugin, runtimeOverlayPlugin] = await Promise.all([
    import("vite"),
    import("@vitejs/plugin-react"),
    import("@replit/vite-plugin-runtime-error-modal"),
  ]);

  const { createServer: createViteServer, createLogger } = viteModule;
  const viteLogger = createLogger();

  const plugins: any[] = [
    reactPlugin.default(),
    runtimeOverlayPlugin.default(),
  ];

  if (process.env.REPL_ID !== undefined) {
    const [cartographerPlugin, devBannerPlugin] = await Promise.all([
      import("@replit/vite-plugin-cartographer"),
      import("@replit/vite-plugin-dev-banner"),
    ]);
    plugins.push(cartographerPlugin.cartographer(), devBannerPlugin.devBanner());
  }

  const serverOptions = {
    middlewareMode: true,
    hmr: { server, path: "/vite-hmr" },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(import.meta.dirname, "..", "client", "src"),
        "@shared": path.resolve(import.meta.dirname, "..", "shared"),
        "@assets": path.resolve(import.meta.dirname, "..", "attached_assets"),
      },
    },
    root: path.resolve(import.meta.dirname, "..", "client"),
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);

  app.use("/{*path}", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html",
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`,
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}
