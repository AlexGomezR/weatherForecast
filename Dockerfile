FROM node:14

# documentacion de node, -p para crear carpetas si no existen
RUN mkdir -p /usr/src/app 

#CD
WORKDIR /usr/src/app 

#Copiar directorio actual dentro del contenedor actual
COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]