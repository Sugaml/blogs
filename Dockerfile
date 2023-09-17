# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Install Prettier globally (optional)
RUN npm install -g prettier

# Copy the rest of the application code to the working directory
COPY . .

# Build the TypeScript application
RUN npm run build

# Expose the port your application will run on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
