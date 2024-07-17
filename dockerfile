# as base es el nombre de la etapa de construcción de la imagen y se puede utilizar para referenciarla en otras etapas.
FROM oven/bun:latest AS base

# as deps es el nombre de la etapa de construcción de las dependencias y se puede utilizar para referenciarla en otras etapas.
FROM base AS deps

# El comando WORKDIR establece el directorio de trabajo para cualquier comando RUN, CMD, ENTRYPOINT, COPY y ADD que siga en el Dockerfile. En este caso, el directorio de trabajo es /src. Si lo especificamos aquí no es necesario hacerlo en cada comando RUN, CMD, ENTRYPOINT, COPY y ADD.
WORKDIR /src
#  Instala las dependencias de producción
RUN apk add --no-cache python3 make g++

# Copia el package.json y package-lock.json (si existe) en el directorio de trabajo /app
COPY package.json /

# Instala las dependencias del proyecto y las guarda en el /app/node_modules
RUN npm install

# Copia el resto de la aplicación en el directorio de trabajo /app
COPY . /

RUN npm run build

# Expone el puerto 3000 para que se pueda acceder a la aplicación desde el exterior
EXPOSE 3000

# Inicia la aplicación
CMD ["npm", "start"]

# Para construir la imagen de Docker, ejecuta el siguiente comando en la terminal:
#  docker build -t my-app-name .

# Para ejecutar la imagen de Docker, ejecuta el siguiente comando en la terminal:
#  docker run -p 3000:3000 my-app-name