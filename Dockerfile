# Stage 1: Build the React application
FROM node:18-alpine AS builder

WORKDIR /app

# Copy the package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the built application
FROM node:18-alpine

WORKDIR /app

# Install serve to serve the build
RUN npm install -g serve

# Copy the build from the previous stage
COPY --from=builder /app/build ./build

# Expose the port the app runs on
EXPOSE 3000

# Start the application on port 3000
CMD ["serve", "-s", "build", "-l", "3000"]
