sudo apt-get update
curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
sudo apt-get -y install nodejs 
sudo apt-get install -y gcc g++ build-essential
sudo apt-get clean
sudo ln -s /usr/bin/nodejs /usr/bin/node
npm install -g cordova ionic 
npm install --no-bin-links --unsafe-perm
