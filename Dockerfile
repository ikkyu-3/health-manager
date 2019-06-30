FROM node:12.5.0-alpine

RUN apk add --no-cache yarn

WORKDIR /app
