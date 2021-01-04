FROM node:12

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY tsconfig.json ./
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]
