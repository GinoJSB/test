#!/bin/bash
# init.sh - Script to initialize the full project (backend, frontend, and Docker)

# 1. Start Docker containers (e.g., MySQL) using docker-compose
echo "Starting Docker containers..."
docker-compose up -d

# Wait for the database to be ready (adjust sleep time if needed)
echo "Waiting for the database to initialize..."
sleep 15

# 2. Start the backend (Spring Boot)
echo "Starting backend..."
cd demo || { echo "Backend directory not found"; exit 1; }
mvn clean install
# Run the backend in the background
mvn spring-boot:run &
cd ..

# 3. Start the frontend (React with TypeScript)
echo "Starting frontend..."
cd frontend || { echo "Frontend directory not found"; exit 1; }
npm install
# Run the frontend development server in the background
npm run dev &
cd ..

echo "All services are up and running!"