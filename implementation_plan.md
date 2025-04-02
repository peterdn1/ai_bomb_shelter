# AI Bomb Shelter Authentication System Implementation Plan

## Project Overview
Full-stack Dockerized authentication system with:
- React frontend
- NestJS backend
- PostgreSQL database
- Docker infrastructure
- SSO integration (Google/Microsoft365/Facebook mock)
- 2FA/TOTP implementation
- Password reset flows

## System Architecture
```mermaid
graph TD
    A[AI Bomb Shelter Auth System] --> B[Frontend Service]
    A --> C[Backend Service]
    A --> D[PostgreSQL Database]
    
    B --> B1[React Application]
    B1 --> B11[Authentication Flows]
    B1 --> B12[API Client]
    B1 --> B13[Session Management]
    
    C --> C1[NestJS API]
    C1 --> C11[User Management]
    C1 --> C12[Auth Providers]
    C1 --> C13[Security Middleware]
    C1 --> C14[Database ORM]
    
    D --> D1[User Schema]
    D --> D2[Auth Tokens]
    
    A --> E[Docker Infrastructure]
    E --> E1[Frontend Container]
    E --> E2[Backend Container]
    E --> E3[PostgreSQL Container]
    E --> E4[Network Configuration]
```

## Implementation Roadmap

### 1. Core Infrastructure Setup (Days 1-2)
```mermaid
flowchart LR
    Monorepo-->Frontend
    Monorepo-->Backend
    Monorepo-->Docker
    Docker-->compose.yml
    Docker-->frontend.Dockerfile
    Docker-->backend.Dockerfile
```

### 2. Backend Implementation
**Auth Core (Days 3-5):**
- User model with Sequelize
- Password hashing (bcrypt)
- JWT session management
- Rate limiting middleware

**SSO Integration (Days 6-8):**
- Passport.js mock strategies
- Token validation workflows
- User reconciliation logic

**Security Infrastructure (Days 9-10):**
- Request validation pipeline
- Security headers (Helmet.js)
- CSP management

### 3. Frontend Implementation (Days 3-10)
- Auth components with Formik
- SSO provider button system
- 2FA workflow (QR code scanner)
- Error handling context

### 4. Testing & Verification (Days 11-12)
```mermaid
pie
    title Test Coverage
    "API Endpoints" : 45
    "UI Flows" : 35
    "Security Scans" : 20
```

## Security Implementation
```mermaid
sequenceDiagram
    participant User
    participant Frontend
    participant Backend
    participant Database
    
    User->>Frontend: Submits credentials
    Frontend->>Backend: API Request (HTTPS)
    Backend->>Database: Parameterized query
    Database-->>Backend: User data
    Backend->>Backend: bcrypt.compare()
    Backend-->>Frontend: HttpOnly cookie
    Frontend->>User: Logged-in session
```

## Docker Strategy
```yaml
# docker-compose.yml
services:
  frontend:
    build: ./frontend
    ports: ["3000:3000"]
  backend: 
    build: ./backend
    environment:
      - DB_HOST=postgres
    depends_on: 
      - postgres
  postgres:
    image: postgres:15
    volumes:
      - pgdata:/var/lib/postgresql/data
```

## Key Decisions
1. **JWT Implementation**: Access tokens (30min) + refresh tokens (7d)
2. **Mock Services**:
   - SSO: Local OAuth2 mock server
   - Email: Console logging with message preview
3. **Security Defaults**:
   - Password complexity: 12+ chars, 1+ special
   - Rate limits: 5/min per endpoint