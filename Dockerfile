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
ENV FEED_ADDR 0x5d07dF5C5bf6Be1d0d5dA53DFEdc50B374EB7f82
ENV PRIVATE_KEY your-private-key

# Start the keeper
CMD ["npm", "start"]