FROM node:14-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY ./package.json /usr/src/app
COPY ./package-lock.json /usr/src/app

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY ./server/. /usr/src/app
COPY ./dist/. /usr/src/app/public

EXPOSE 4000
CMD [ "node", "index.js" ]
