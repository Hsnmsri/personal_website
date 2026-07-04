FROM node:25-alpine AS build

RUN apk add --no-cache python3 make g++

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm i --verbose

COPY . .

RUN npm run build

FROM node:25-alpine

WORKDIR /app

COPY --from=build /app/.output /app/.output

RUN mkdir -p /app/.data

EXPOSE 3000

ENV NITRO_PORT=3000
ENV NITRO_HOST=0.0.0.0

CMD ["node", ".output/server/index.mjs"]
