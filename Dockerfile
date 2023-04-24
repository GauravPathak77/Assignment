FROM node:19

# working directory for the server
WORKDIR /app/server

COPY server/package*.json ./

RUN npm install

COPY server .

# working directory for the client
WORKDIR /app/client

COPY client/package*.json ./

RUN npm install

COPY client .

EXPOSE 3000

CMD ["npm", "run", "start"]
