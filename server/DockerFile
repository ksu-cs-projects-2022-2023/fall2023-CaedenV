# server/Dockerfile
# For running in development mode only
FROM node:18
USER 1000
WORKDIR /app/server
COPY --chown=1000:1000 package*.json ./
RUN npm install
EXPOSE 3000
CMD ["npm", "run", "dev"]