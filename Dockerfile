FROM node:16.14.1 AS temp

WORKDIR /opt/app
COPY . .

RUN yarn install

RUN yarn build

COPY ./build /opt/app/

CMD [ "yarn", "start" ]