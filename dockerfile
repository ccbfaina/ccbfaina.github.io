FROM node:20-alpine as CLIENT

WORKDIR /app/client
COPY client .
RUN npm install && npm run build

WORKDIR /app/server
COPY server .
RUN npm install

EXPOSE 3000
CMD [ "npm", "run", "start" ]
