FROM node:20 AS builder 

WORKDIR /app

COPY package*.json ./

RUN npm install

FROM node:alpine AS runner 

WORKDIR /app

COPY . .

CMD [ "npm", "run", "start:dev" ]

