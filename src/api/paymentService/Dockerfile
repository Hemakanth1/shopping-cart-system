FROM node:alpine

RUN mkdir -p /app/paymentService
WORKDIR /app/paymentService
COPY package*.json /app/paymentService/
RUN npm install -g sequelize-cli
RUN npm install -g ts-node
RUN npm install


COPY . /app/paymentService
EXPOSE 80
CMD ["npm", "run", "migrate-and-start"]