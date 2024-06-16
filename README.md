# Hex One Protocol Feed Keeper
This repository contains the keeper script used to update the `HexOnePriceFeed.sol` contract. 

## Getting Started
To get started with the Hex One Protocol Feed Keeper, follow the steps below:

### Docker
1. Build the Docker image by running the following command:
```zsh
docker build . --tag hex1-keeper --platform linux/amd64
```
2. Add a repository tag to the docker image:
```zsh
docker tag hex1-keeper europe-west9-docker.pkg.dev/hex1-backend/hex1-containers/hex1-keeper:x.x.x
```
3. Push image to the remote repository:
```zsh
docker push europe-west9-docker.pkg.dev/hex1-backend/hex1-containers/hex1-keeper:x.x.x
```