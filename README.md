# Plataforma de Gestión de Pedidos

Este proyecto es una API backend para la gestión de pedidos, productos y usuarios en una tienda online. Utiliza Node.js, MongoDB, Kafka y Docker, siguiendo buenas prácticas de microservicios y APIs REST.

## Tecnologías principales
- Node.js
- MongoDB
- Kafka
- Docker
- Git
- Pruebas automatizadas (Jest)
- APIs REST
- CI/CD
- Monitoreo (Datadog, Dynatrace)

## Requisitos previos
- [Docker y Docker Compose](https://docs.docker.com/get-docker/)
- Node.js (solo si quieres correr pruebas o desarrollo local)

## Variables de entorno
Copia el archivo `.env.example` a `.env` y configura tus variables:

```
MONGO_URI=mongodb://root:example@mongo:27017/
KAFKA_BROKER=kafka:9092
PORT=3000
```

## Levantar el entorno completo
1. Clona el repositorio:
   ```bash
   git clone <url-del-repo>
   cd backnodejsmongodb
   ```
2. Copia y edita el archivo `.env` si es necesario.
3. Levanta todos los servicios con Docker Compose:
   ```bash
   docker-compose up --build
   ```
4. Accede a la API en [http://localhost:3000/api/orders](http://localhost:3000/api/orders)

## Comandos útiles de Docker

- **Levantar todos los servicios (construyendo imágenes):**
  ```bash
  docker-compose up --build
  ```
- **Levantar en segundo plano (detached):**
  ```bash
  docker-compose up -d --build
  ```
- **Ver logs de todos los servicios:**
  ```bash
  docker-compose logs
  ```
- **Ver logs de un servicio específico (ejemplo: backend):**
  ```bash
  docker-compose logs backend
  ```
- **Detener todos los servicios:**
  ```bash
  docker-compose down
  ```
- **Detener y eliminar contenedores, redes y volúmenes anónimos:**
  ```bash
  docker-compose down -v
  ```
- **Ver el estado de los contenedores:**
  ```bash
  docker ps
  ```

## Monitoreo
- **Datadog:** El agente se levanta automáticamente. Configura tu API Key en el archivo `docker-compose.yml`.
- **Dynatrace:** El agente se levanta automáticamente, pero en Docker Desktop para Mac solo podrás monitorear contenedores (no el host completo).

## Pruebas automatizadas
Puedes correr los tests con:
```bash
npm install
npm test
```

## Endpoints principales
- `GET /api/orders` — Lista todos los pedidos
- `POST /api/orders` — Crea un nuevo pedido

## Notas
- Si usas Docker Desktop en Mac, Dynatrace OneAgent no podrá monitorear el host completo por limitaciones de permisos.
- Para monitoreo completo, usa un entorno Linux real o en la nube.

---

¡Listo! Así puedes levantar y monitorear todo el entorno fácilmente. 