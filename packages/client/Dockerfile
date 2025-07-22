FROM node:20

# Create app directory
WORKDIR /usr/src/app

COPY ./package*.json ./
COPY . ./
RUN npm install

RUN npm run build

EXPOSE 4173
CMD ["npm", "run", "preview"]