/* Importar Base de datos */
import { pool } from '../db/db.js'

/* Modulo de añadir un registro en la biblioteca */
export const addRegistro = async (req, res) => {
  try {
    const { id_alumno, id_libro, inicio, fin, id_entregado } = req.body;

    const [result] = await pool.query(
      `INSERT INTO registros (id_alumno, id_libro, inicio, fin, id_entregado) VALUES (?, ?, ?, ?, ?)`,
      [id_alumno, id_libro, inicio, fin, id_entregado]
    );

    res.json({
      id: result.insertId,
      id_alumno, id_libro, inicio, fin, id_entregado
    });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Modulo de editar un registro de la biblioteca */
export const editRegistro = async (req, res) => {
  try {
    const { id } = req.params
    const { id_alumno, id_libro, inicio, fin, id_entregado } = req.body;

    const [resultados] = await pool.query("SELECT * FROM libros WHERE id = ?", [
      id,
    ]);

    if (resultados.length === 0)
      return res.status(404).json({ message: "No se ha encontrado el libro" });

    const [result] = await pool.query(
      `UPDATE registros
      SET id_alumno = ?, id_libro = ?, inicio = ?, fin = ?, id_entregado = ?
      WHERE id = ?`,
      [id_alumno, id_libro, inicio, fin, id_entregado, id]
    );

    res.json({
      id: result.insertId,
      id_alumno, id_libro, inicio, fin, id_entregado
    });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/* Modulo de eliminar un registro de la biblioteca */
export const deleteRegistro = async (req, res) => {
  try {
    const { id } = req.params

    const [resultados] = await pool.query("DELETE FROM registros WHERE id = ?", [
      id,
    ]);

    if (resultados.affectedRows === 0)
      return res.status(404).json({ message: "No se encontro el registro a borrar" });

    return res.sendStatus(204);

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};