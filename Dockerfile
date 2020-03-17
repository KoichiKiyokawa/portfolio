FROM node:12.16.1-alpine3.11

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn && yarn cache clean

ENV HOST 0.0.0.0

CMD ["yarn", "dev"]
