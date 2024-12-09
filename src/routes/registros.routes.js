/* Importamos el paquete express */
import express from 'express';

/* Importamos otros archivos */
import {
  addRegistro,
  editRegistro,
  deleteRegistro
} from '../controllers/registro.controller.js';
import { validateSchema } from '../middleware/validator.middleware.js'
import { registroSchema } from '../schemas/registro.schema.js';

const router = express.Router();

router.post('/add', validateSchema(registroSchema), addRegistro);
router.post('/edit/:id', validateSchema(registroSchema), editRegistro);
router.post('/delete/:id', deleteRegistro);

export default router;