FROM node:16.4.2-alpine as base
WORKDIR /users-api
COPY . /users-api

RUN npm install --loglevel=warn
RUN npm run lint

ENV NODE_ENV production

FROM base as production
RUN npm run build
CMD [ "npm", "run", "start:prod"]

FROM base as dev
CMD [ "npm", "run", "start:debug"]

FROM base as e2e
