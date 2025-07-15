# Build stage
FROM golang:1.23 AS builder

WORKDIR /app

COPY ./AnalyticsManagement /app/AnalyticsManagement
COPY ./.env /app/.env

RUN chmod +x /app/AnalyticsManagement

EXPOSE 4001

CMD ["./AnalyticsManagement"]
