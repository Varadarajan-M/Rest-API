FROM node:16.7.0

WORKDIR /api

COPY package*.json .

RUN npm install

COPY . .

CMD [ "npm", "run", "dev" ]


