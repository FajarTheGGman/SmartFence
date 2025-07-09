#!/bin/sh
envsubst '${PROD_PORT}' < /etc/nginx/conf.d/app.conf.template > /etc/nginx/conf.d/default.conf
exec nginx -g 'daemon off;'
