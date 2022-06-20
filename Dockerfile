FROM node:14


WORKDIR /myapp/
COPY . /myapp/

RUN yarn install
RUN yarn build:ssr
CMD yarn start

