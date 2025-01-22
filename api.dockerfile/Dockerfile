FROM node:22 AS base
USER node
WORKDIR /api
EXPOSE 3000
CMD [ "/bin/bash" ]

FROM base AS dev
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "npm","run","dev" ]

FROM dev AS build
RUN npm run build

FROM build AS prod
RUN npm run prod
CMD [ "node","dist/index.js" ]
