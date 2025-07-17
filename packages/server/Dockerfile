# Use official Node.js LTS image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json ../../package-lock.json ./
RUN npm install --production

# Copy the rest of the server code
COPY . .

# Expose Strapi default port
EXPOSE 1337

# Start Strapi
CMD ["npm", "start"]
