FROM node:12.5.0
LABEL maintainer="Moromir"

COPY src/ /opt/app/

WORKDIR /opt/app/
RUN npm install

ENTRYPOINT ["npm", "start"]
