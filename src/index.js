/* Importamos bibliotecas */
import express from "express";
import dotenv from 'dotenv'
import cors from "cors";

/* Rutas */
import addRouter from './routes/add.routes.js'
import editRouter from './routes/edit.routes.js'
import deleteRouter from './routes/delete.routes.js'
import registroRouter from './routes/registros.routes.js'
import entregadoRouter from './routes/entregado.routes.js'

dotenv.config()

const server = express() // Inicializamos el servidor
const port = 5000 // Puerto

const url_frontend = `http://localhost:5173` // URL del frontend

/* Hacemos que sea json la respuesta y que pueda acceder el frontend al backend */
server.use(cors({ origin: url_frontend, credentials: true }));
server.use(express.json())

/* Rutas */
server.use('/api/add', addRouter)
server.use('/api/edit', editRouter)
server.use('/api/delete', deleteRouter)
server.use('/api/registros', registroRouter)
server.use('/api/entregados', entregadoRouter)

/* Otras rutas que no sean las antes dichas */
server.use('*', (req, res) => {
  res.send('Hello World!')
})

/* Escuchamos el servidor */
server.listen(port, () => {
  console.log("Server is running on: " + port);
});