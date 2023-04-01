# Use an official Node.js runtime as a parent image
FROM node:latest

# Copy package.json and package-lock.json to the container
COPY !(node_modules) ./

# Install dependencies
RUN npm install

# Expose the port on which the application will run
EXPOSE 3000

# Start the application
CMD [ "node", "index.js" ]
