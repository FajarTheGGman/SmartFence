#!/bin/sh
set -e

# Substitute environment variable and strip carriage returns just in case
tr -d '\r' < /etc/nginx/conf.d/app.conf.template | envsubst '${PROD_PORT}' > /etc/nginx/conf.d/default.conf

exec nginx -g 'daemon off;'
