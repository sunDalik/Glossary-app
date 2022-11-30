FROM node:16-alpine
COPY . /app
WORKDIR /app
RUN npm install && cd frontend && npm install && npm run build && cd ..
EXPOSE 8000
CMD npm run backend