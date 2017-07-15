FROM node:latest

LABEL name="wt-webapp" \
      maintainer="anton.yaskevich.mail@gmail.com"

ARG ROOT_DIR=/usr/workspace
ARG WORK_DIR=$ROOT_DIR/wt

RUN mkdir -p $WORK_DIR
COPY . $WORK_DIR
WORKDIR $WORK_DIR

RUN yarn

CMD [ "yarn", "run", "prod" ]