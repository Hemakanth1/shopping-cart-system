FROM node:alpine

RUN mkdir -p /app/productService
WORKDIR /app/productService
COPY package*.json /app/productService/
RUN npm install -g sequelize-cli
RUN npm install -g ts-node
RUN npm install


COPY . /app/productService
EXPOSE 80
CMD ["npm", "run", "migrate-and-start"]