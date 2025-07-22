# Use official Node.js LTS image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json ./
RUN npm install --production

# Copy the rest of the server code
COPY . .

# Expose Strapi default port
EXPOSE 1338

# Start Strapi
CMD ["npm", "start"]
