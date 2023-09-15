FROM node:18-alpine
WORKDIR '/app'
COPY package.json .
RUN npm install
RUN npm install -g @angular/cli
COPY . .
EXPOSE 4200
RUN ng build
CMD ng serve --host 0.0.0.0 --port 4200 --disable-host-check
