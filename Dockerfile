# Use LTS version of Node & Alpine distribution
FROM node:20.14.0-alpine3.19

# Create the working directory, with node_modules
RUN mkdir -p /usr/src/keeper/node_modules

# Change ownership of the working directory 
# Allow the node:node user:group
RUN chown -R node:node /usr/src/keeper

# Configure with non-privilige 
# Comes with official Node image
USER node

# Set the default working directory for the keeper
WORKDIR /usr/src/keeper

# Copy package files separately
# Avoids running npm install on every code change
COPY --chown=node:node package.json /usr/src/keeper/
COPY --chown=node:node package-lock.json /usr/src/keeper/

# Install dependencies
RUN npm install

# Bundle the keeper source
COPY --chown=node:node . ./

# Set the environment variables
ENV RPC_URL https://rpc.pulsechain.com
ENV FEED_ADDR feed-address-here
ENV PRIVATE_KEY private-key-here

# Start the keeper
CMD ["npm", "start"]
