![logo](frontend/public/assets/logo.png)
# AI Bomb Shelter Project Deployment Guide

## Prerequisites
- Node.js v18.x
- PostgreSQL 15+
- npm 9.x

## Installation

### 1. Clone Repository
```bash
git clone https://github.com/peterdn1/ai_bomb_shelter.git
cd ai_bomb_shelter
```

### 2. Install Dependencies
Frontend:
```bash
cd frontend
npm install
cd ..
```

Backend:
```bash
cd backend
npm install
npm run build
cd ..
```

### 3. Database Setup
Create PostgreSQL database:
```bash
createdb ai_bomb_shelter
```

### 4. Environment Configuration
Copy example environment file:
```bash
cp .env.example .env
```
Edit .env with your database credentials:
```env
DATABASE_URL=postgres://user:password@localhost:5432/ai_bomb_shelter
API_PORT=5000
```

## Running the Application

### Development Mode
Frontend (terminal 1):
```bash
cd frontend
npm start
```

Backend (terminal 2):
```bash
cd backend
npm run dev
```

### Production Mode
1. Build frontend:
```bash
cd frontend
npm run build
cd ..
```

2. Start backend:
```bash
cd backend
npm start
```

Access application at: http://localhost:3000

## Docker Deployment
1. Build and start containers:
```bash
docker-compose up --build
```

2. Access application at: http://localhost:3000

Additional notes:
- Includes PostgreSQL database
- Environment variables configured in docker-compose.yml
- Persistent data storage via volumes

## Deployment Notes
- Requires Node.js on both environments
- Configure reverse proxy (Nginx/Apache) for production
- Set NODE_ENV=production in production environment
- Monitor PM2 process manager for Node services

## Troubleshooting
- Ensure PostgreSQL is running
- Verify .env file exists with correct permissions
- Check port availability (3000/5000)
- Run `npm run build` after dependency changes