# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm install

# Bundle app source
COPY . .

# Build the app
RUN npm run build

# Install serve package globally to serve the static files
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 5000

# Define environment variable
ENV NAME World

# Command to run the app
CMD ["serve", "-s", "build"]
