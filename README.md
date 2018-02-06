# Design Project Ionic Mobile Application

This is a repository for the design project ionic mobile application.

## Prerequisites

To run the ionic project, you must first install Node.js onto your local development environment. 
On a Mac you can do this using the [Homebrew](https://brew.sh/) package manager.

Once you have installed Homebrew, you can run the following command to install Node.js

```
brew update
brew install node
```

The equivalent can be performed on Windows using [Chocolatey](https://chocolatey.org/) and the following command

```
choco upgrade chocolatey
choco install nodejs
```

Once you have Node.js, you can use the npm package manager to install the cordova and ionic command line tools that will be used to manage the project

```
npm install -g cordova ionic
```

## Setup

Once you have completed the prerequisites, you can start up the app.

```
cd <DIRECTORY OF YOU APPLICATION>
ionic serve
```

After starting the app, you will be able to view it at localhost:8100.

## Setup In Linux

To setup in a linux environment, simply run the build_environemnt.sh bash script in the root folder to build all dependencies.

```
chmod +x build_environment.sh
./build_environment.sh
```

After running the bash script, you can start up the app.

```
ionic serve
```

Once the app has been started, you will be able to view it at localhost:8100. 
If the linux environment is being run in a vagrant virtual box using the included Vagrantfile, you can view the app at localhost:3000 (Forwarded port).

