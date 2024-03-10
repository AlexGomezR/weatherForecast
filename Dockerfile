# alpine -> preguntar chatgpt
FROM NODE:14-alpine  

RUN npm i

# Copia un script de inicialización a la imagen
COPY ./init.sh /docker-entrypoint-initdb.d/

# Establece permisos de ejecución al script de inicialización
RUN chmod +x /docker-entrypoint-initdb.d/init.sh
