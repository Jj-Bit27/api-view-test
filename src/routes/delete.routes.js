/* Importamos el paquete express */
import express from 'express';

/* Importamos otros archivos */
import {
  deleteLibro,
  deleteAutor,
  deleteEditorial,
  deleteCategoria,
  deleteAlumno
} from '../controllers/delete.controller.js';

const router = express.Router();

router.post('/alumno/:id', deleteAlumno);
router.post('/libros/:id', deleteLibro);
router.post('/categorias/:id', deleteCategoria);
router.post('/editoriales/:id', deleteEditorial);
router.post('/autores/:id', deleteAutor);

export default router;