FROM quay.io/ukhomeofficedigital/nodejs-base:v8.11.1

ENV USER pttg
ENV USER_ID 1000
ENV GROUP pttg
ENV NAME pttg-rps-enquiry

ARG VERSION

RUN groupadd -r ${GROUP} && \
    useradd -u ${USER_ID} -g ${GROUP} ${USER} -d /public && \
    mkdir -p /public && \
    chown -R ${USER}:${GROUP} /public

WORKDIR /app

RUN mkdir -p /app && \
    chown -R ${USER}:${GROUP} /app

COPY . /app
RUN npm rebuild node-sass
RUN npm --loglevel warn install --only=prod
RUN npm --loglevel warn run postinstall

RUN chmod a+x /app/run.sh

USER ${USER_ID}

EXPOSE 8000

ENTRYPOINT /app/run.sh
