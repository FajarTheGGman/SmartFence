# Build stage
FROM golang:1.23 AS builder

WORKDIR /app

COPY ./UsersManagement /app/UsersManagement

RUN chmod +x /app/UsersManagement

# Set the binary as the entrypoint
EXPOSE 7002
ENTRYPOINT ["./UsersManagement"]
