FROM node:17

# Install app dependencies
RUN npm i -g http-server

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

# Bundle app source
COPY . .

RUN npm run build

EXPOSE 8080

CMD ["http-server", "build"]