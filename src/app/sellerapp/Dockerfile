FROM node:alpine

RUN mkdir -p /app
# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json /app/

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . /app

# Build the Next.js app
# RUN npm run build

# Expose port 3000
EXPOSE 3000

# Command to run the Next.js app
CMD ["npm", "run", "dev"]
