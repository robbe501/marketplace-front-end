
#FROM node:18-alpine
#WORKDIR '/app'
#COPY package.json .
#RUN npm install
#RUN npm install -g @angular/cli
#COPY . .
#EXPOSE 4200
#RUN ng build
#CMD ng serve --host 0.0.0.0 --port 4200 --disable-host-check


FROM node:18-alpine AS build
WORKDIR /dist/src/app
RUN npm cache clean --force
COPY . .
RUN npm install
RUN npm run build --prod



FROM trion/nginx-angular:latest AS ngi

COPY --from=build /dist/src/app/dist/market-place-artigiani /usr/share/nginx/html
EXPOSE 8080
