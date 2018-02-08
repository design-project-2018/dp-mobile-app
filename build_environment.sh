sudo apt-get update
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get -y install nodejs 
sudo apt-get install -y gcc g++ build-essential
sudo apt-get clean
sudo mkdir ~/.npm-global
sudo npm config set prefix '~/.npm-global'
sudo export PATH=~/.npm-global/bin:$PATH
sudo source ~/.profile
sudo npm config set user 0
sudo npm config set unsafe-perm true
sudo npm install -g npm@latest
sudo rm -rf node_modules
sudo npm cache -f clean
sudo npm install -g cordova ionic 
sudo npm install --no-bin-links 
