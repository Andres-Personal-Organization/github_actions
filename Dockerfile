FROM public.ecr.aws/docker/library/node:18.17.1-alpine

RUN apk add dumb-init -v
RUN apk add nss -v
RUN apk add ca-certificates -v

ENV NODE_ENV=production
WORKDIR /usr/src/app


COPY --chown=node:node .yarnrc.yml package.json yarn.lock ./
COPY --chown=node:node .yarn/releases ./.yarn/releases/
COPY --chown=node:node .yarn/plugins ./.yarn/plugins/


RUN cat package.json

RUN ls -lah
RUN yarn --version
RUN node --version

RUN yarn workspaces focus --production
COPY --chown=node:node dist ./dist

EXPOSE 3000 3001
USER node

ENTRYPOINT ["dumb-init", "node", "dist/main"]

