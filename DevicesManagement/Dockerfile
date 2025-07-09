# Build stage
FROM golang:1.23 AS builder

WORKDIR /app

COPY ./DevicesManagement /app/DevicesManagement

RUN chmod +x /app/DevicesManagement

EXPOSE 7003
ENTRYPOINT ["./DevicesManagement"]
