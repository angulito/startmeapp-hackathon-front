FROM tiangolo/node-frontend:10 as build-stage

RUN npm install webpack -g

ARG API

WORKDIR /app
COPY . .
RUN npm install

ENV NODE_ENV=production 
ENV PORT=3000
ENV REACT_APP_API=${API}
RUN npm run build

FROM nginx:1.15

COPY --from=build-stage /app/build/ /usr/share/nginx/html

# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY --from=build-stage /nginx.conf /etc/nginx/conf.d/default.conf