FROM node:22 AS base
USER node
WORKDIR /api
EXPOSE 3000
CMD [ "/bin/bash" ]

FROM base AS dev
COPY package*.json ./
RUN RUN --mount=type=cache,target=/root/.npm npm install
COPY . .
CMD [ "npm","run","dev" ]

FROM dev AS build
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev
RUN npm run build

FROM node:22-alpine AS prod
WORKDIR /api
# Copier uniquement ce qui est nécessaire
COPY --from=build /api/dist ./dist
COPY --from=build /api/node_modules ./node_modules
CMD ["node", "dist/index.js"]
