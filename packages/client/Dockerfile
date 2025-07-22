FROM node:20

# Create app directory
WORKDIR /usr/src/app

COPY ./app/package*.json ./
RUN npm ci

COPY ./app ./
RUN npm install

RUN npm run build

EXPOSE 5173
CMD ["node", "app-output/index.js"]