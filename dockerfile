FROM node:16

WORKDIR /ADFO/
COPY . /ADFO/
COPY ./package.json /ADFO/
COPY ./yarn.lock /ADFO/

RUN yarn install
RUN yarn build
CMD yarn start