# Hex One Protocol Feed Keeper
This repository contains the keeper script used to update the `HexOnePriceFeed.sol` contract. 

## Getting Started
To get started with the Hex One Protocol Feed Keeper, follow the steps below:

### Docker
1. Set your private key in the Dockerfile:
```
ENV PRIVATE_KEY your-private-key
```

2. Build the docker image by running the following command:
```zsh
docker build . --tag hex1-keeper
```
3. Run the docker image:
```zsh
docker run hex1-keeper
```