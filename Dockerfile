# Stage 1: Build the React Application
FROM node:22-alpine as build

WORKDIR /app

COPY package.json package-lock.json ./

# 👇 අලුත් කොටස: අපි වෙනත් වේගවත් Registry එකක් (Mirror) සෙට් කරනවා
RUN npm config set registry https://registry.npmmirror.com/

# ඊට පස්සේ Install කරන්න
RUN npm install --legacy-peer-deps

COPY . .
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]