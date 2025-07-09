# Dockerfile.dev
FROM golang:1.23

WORKDIR /app

COPY ./HardwareService /app/HardwareService

RUN chmod +x /app/HardwareService

CMD ["./HardwareService"]
