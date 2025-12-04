# Stage 1: Build the React application
FROM node:18-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application with Express
FROM node:18-alpine

WORKDIR /app

# Copy package files and install production dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Copy built assets from the build stage
COPY --from=build /app/dist ./dist

# Copy server code
COPY server ./server

# Expose the port
EXPOSE 4000

# Start the server
CMD ["node", "server/sendEmail.js"]
