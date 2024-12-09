/* Importamos el paquete express */
import express from 'express';

/* Importamos otros archivos */
import {
  addEntregado,
  editEntregado,
  deleteEntregado
} from '../controllers/entregado.controller.js';
import { validateSchema } from '../middleware/validator.middleware.js'
import { entregadoSchema } from '../schemas/entregado.schema.js';

const router = express.Router();

router.post('/add', validateSchema(entregadoSchema), addEntregado);
router.post('/edit/:id', validateSchema(entregadoSchema), editEntregado);
router.post('/delete/:id', deleteEntregado);

export default router;