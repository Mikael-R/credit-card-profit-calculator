FROM bitnami/node:20 AS build
ARG VITE_API_BASE_URL
ENV VITE_API_BASE_URL=${VITE_API_BASE_URL}
WORKDIR /app
COPY . .
RUN yarn
RUN yarn run build

FROM bitnami/node:20 AS prod
WORKDIR /app
COPY --from=build /app .
EXPOSE 5000 8080 4173
CMD ["yarn", "preview", "--host", "0.0.0.0"]
