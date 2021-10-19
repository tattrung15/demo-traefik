FROM node:12-alpine as build-stage
WORKDIR /client
COPY . .
ARG REACT_APP_BASE_API
ENV REACT_APP_BASE_API=$REACT_APP_BASE_API
RUN yarn install
RUN yarn build


FROM nginx:stable-alpine
COPY --from=build-stage /client/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]