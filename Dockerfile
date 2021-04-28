FROM node:10.24.1-alpine

ENV USER user-pttg
ENV GROUP group-pttg
ENV NAME pttg-rps-enquiry

ARG VERSION

RUN addgroup ${GROUP} && \
    adduser -D ${USER} -g ${GROUP} && \
    mkdir -p /public && \
    chown -R ${USER}:${GROUP} /public

RUN mkdir -p /app && \
    chown -R ${USER}:${GROUP} /app

COPY . /app

WORKDIR /app

RUN npm rebuild node-sass
RUN npm --loglevel warn install --only=prod
RUN npm --loglevel warn run postinstall

RUN chmod a+x /app/run.sh

USER ${USER}

EXPOSE 8000

ENTRYPOINT /app/run.sh
