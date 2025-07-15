# Build stage
FROM golang:1.23 AS builder

WORKDIR /app

COPY ./UsersManagement /app/UsersManagement
COPY ./.env /app/.env

RUN chmod +x /app/UsersManagement

EXPOSE 4001

CMD ["./UsersManagement"]
