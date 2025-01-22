FROM node:18 AS base
WORKDIR /app
EXPOSE 3000

FROM base AS dev
COPY ./api-back/package*.json ./
RUN npm install
USER node
COPY  ./api-back ./

FROM base AS builder
RUN npm run build

FROM node:18-alpine AS prod
WORKDIR /app
COPY --from=builder /app/package*.json ./
RUN npm install --production
COPY --from=builder /app/dist ./dist/

EXPOSE 3000
CMD [ "node","dist/index.js" ]
