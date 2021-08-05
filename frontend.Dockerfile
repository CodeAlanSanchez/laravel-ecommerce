FROM node:alpine3.11

WORKDIR /app

COPY . .
RUN npm install

CMD npm run production