# Stage 1: Build the React Application
FROM node:22-alpine as build

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies with --legacy-peer-deps to avoid version conflicts
# Removed --omit=dev because build tools are needed
RUN npm install --legacy-peer-deps

# Copy remaining files and build
COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy built files to Nginx folder
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]