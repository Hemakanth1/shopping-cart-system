FROM node:alpine

RUN mkdir -p /app/orderService
WORKDIR /app/orderService
COPY package*.json /app/orderService/
RUN npm install -g sequelize-cli
RUN npm install -g ts-node
RUN npm install


COPY . /app/orderService
EXPOSE 80
CMD ["npm", "run", "migrate-and-start"]