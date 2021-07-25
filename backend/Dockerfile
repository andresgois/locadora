FROM node:12-alpine

ARG APP=app
ARG HOME=/home/node

RUN mkdir -p ${HOME}/${APP}

COPY package*.json ./

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

WORKDIR ${HOME}/${APP}

USER node

RUN npm install  && \
    npm install -g nodemon && \
    npm install knex -g 

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev:server"]
# docker run -d --name app -p 3000:3001  -v //y//projects//Locacao//backend:/usr/src/app --rm nodeapp
# docker exec -it baea6de55711 //bin//sh
