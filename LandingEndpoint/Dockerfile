# Build Stage
FROM node:18-alpine AS builder
WORKDIR /app

# Copy package.json and package-lock.json
COPY ./landingpage/package.json ./landingpage/package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY ./landingpage .

# Build the Vite project
RUN npm run build

# Serve the Vite app using http-server in a production environment
FROM node:18-alpine AS production

WORKDIR /app

# Install http-server to serve the built app
RUN npm install -g http-server

# Copy the build output from the builder stage
COPY --from=builder /app/dist /app/dist

# Expose the port for the server
EXPOSE 4173

# Start the http-server to serve the build output
CMD ["http-server", "dist", "--port", "4173", "--proxy", "http://localhost:4173?", "--path", "/landingpage"]

