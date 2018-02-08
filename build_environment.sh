sudo apt-get update
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get -y install nodejs 
sudo apt-get install -y gcc g++ build-essential
sudo apt-get clean
sudo rm -rf node_modules
sudo npm cache -f clean
sudo ln -s /usr/bin/nodejs /usr/bin/node
sudo npm install -g cordova ionic 
sudo npm install --no-bin-links --unsafe-perm
