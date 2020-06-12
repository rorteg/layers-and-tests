#!/bin/bash
source ~/.bashrc
export NPM_TOKEN="8eee1434-4ec8-4fd1-899b-1e9ea212b5bb"
npm config set //registry.npmjs.org/:_authToken=8eee1434-4ec8-4fd1-899b-1e9ea212b5bb
cd /var/www/service
npm install -g npm@4
npm install --production
cd /var/www
[ ! -d deployments ] && mkdir deployments
cd deployments
rm -rf old
[ -d current ] && mv current old
cp -R /var/www/service current
cd /var/www/server
unlink app
ln -s /var/www/deployments/current app