# Dockerfile.dev
FROM golang:1.23

WORKDIR /app

COPY ./HardwareService /app/HardwareService
COPY ./.env /app/.env

RUN chmod +x /app/HardwareService

CMD ["./HardwareService"]
