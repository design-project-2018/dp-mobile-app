sudo apt-get update
curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
sudo apt-get -y install nodejs 
sudo apt-get install -y gcc g++ build-essential
sudo apt-get clean
NPM_CONFIG_PREFIX=~/.npm-global
source ~/.profile
npm install -g cordova ionic 
npm install --no-bin-links --unsafe-perm
