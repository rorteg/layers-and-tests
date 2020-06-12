#!/bin/bash
source ~/.bashrc
cd /var/www/server
pm2 reload process.yml --only $SERVICE_NAME --env $APPLICATION_ENV

#curl --location --request PUT $GATEWAY_ADMIN_PATH':'$GATEWAY_ADMIN_PORT'/services/'$SERVICE_NAME \
#--header 'Content-Type: application/json' \
#--data '{
#	"name": "'"$SERVICE_NAME"'",
#	"url": "'"$PRIVATE_LOAD_BALANCER_URL"'/'"$SERVICE_ROUTE"'"
#}'

#curl --location --request PUT $GATEWAY_ADMIN_PATH':'$GATEWAY_ADMIN_PORT'/routes/'$SERVICE_NAME \
#--header 'Content-Type: application/json' \
#--data '{
#	"name": "'"$SERVICE_NAME"'",
#	"protocols": ["http"],
#	"paths": ["/'"$SERVICE_ROUTE"'"],
#	"service": {
#		"name": "'"$SERVICE_NAME"'"
#	}
#}'
