FROM node:16

WORKDIR /ADFO/
COPY . /ADFO/
COPY ./package.json /ADFO/
COPY ./yarn.lock /ADFO/

RUN yarn install
RUN yarn build

RUN export NEXT_PUBLIC_API_KEY=AIzaSyDFTIrjcGgFGU_f48mlky95NX2V6gqr6Ug
RUN export NEXT_PUBLIC_AUTH_DOMAIN=adfo-effc3.firebaseapp.com
RUN export NEXT_PUBLIC_PROJECT_ID=adfo-effc3
RUN export NEXT_PUBLIC_STORAGE_BUCKET=gs://adfo-effc3.appspot.com/
RUN export NEXT_PUBLIC_MESSAGING_SENDER_ID=115100544280
RUN export NEXT_PUBLIC_APP_ID=1:115100544280:web:3af32696adb60155a9026d

CMD yarn start