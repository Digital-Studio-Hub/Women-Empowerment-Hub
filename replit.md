# Women of Worth Projects

## Overview

Women of Worth Projects is a purpose-driven women empowerment platform focused on business opportunity education, mentorship, and wellness entrepreneurship. The platform serves as both an informational website and a business opportunity portal for women seeking financial independence through ethical wellness product sales and community-driven business building.

**Business Focus:** Business education and empowerment are primary; product sales are secondary.

**Target Audience:** Women seeking financial independence, entrepreneurs, wellness-focused individuals, and community-driven business builders.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework:** React 18 with TypeScript
- **Routing:** Wouter (lightweight React router)
- **State Management:** TanStack React Query for server state
- **Styling:** Tailwind CSS with CSS variables for theming
- **UI Components:** shadcn/ui component library (New York style) with Radix UI primitives
- **Form Handling:** React Hook Form with Zod validation
- **Build Tool:** Vite with custom plugins for Replit integration

### Backend Architecture
- **Framework:** Express.js 5 with TypeScript
- **Server:** HTTP server with development HMR support via Vite middleware
- **API Pattern:** RESTful endpoints under `/api` prefix
- **Validation:** Zod schemas shared between frontend and backend

### Data Storage
- **ORM:** Drizzle ORM configured for PostgreSQL
- **Schema Location:** `shared/schema.ts` (shared between client and server)
- **Current Storage:** In-memory storage implementation (`MemStorage` class)
- **Database Ready:** PostgreSQL schema defined, requires `DATABASE_URL` environment variable

### Key Design Decisions

1. **Monorepo Structure:** Single repository with `client/`, `server/`, and `shared/` directories enables code sharing and type safety across the stack.

2. **Shared Schema Pattern:** Database schemas and validation types are defined once in `shared/schema.ts` and used by both frontend and backend, ensuring type consistency.

3. **Component-First UI:** Uses shadcn/ui components which are copied into the codebase rather than installed as dependencies, allowing full customization.

4. **Path Aliases:** TypeScript path aliases (`@/` for client, `@shared/` for shared) simplify imports across the codebase.

5. **Theme System:** Custom rose gold and warm neutral color palette defined via CSS variables, supporting both light and dark modes.

## External Dependencies

### Email Service
- **ZeptoMail:** Transactional email service for contact form submissions
- **Environment Variable:** `ZEPTOMAIL_TOKEN` required for email functionality

### Database
- **PostgreSQL:** Primary database (requires `DATABASE_URL` environment variable)
- **Drizzle Kit:** Database migrations via `npm run db:push`

### Key NPM Packages
- `@tanstack/react-query` - Server state management
- `drizzle-orm` / `drizzle-zod` - Database ORM and schema validation
- `express` - Web server framework
- `wouter` - Client-side routing
- `zod` - Runtime type validation
- `react-hook-form` - Form state management

### Development Tools
- `vite` - Build tool and dev server
- `tsx` - TypeScript execution
- `esbuild` - Production bundling for server