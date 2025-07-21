// src/routers/proyecto.routes.js
import { Router } from 'express';

const router = Router();

router.get('/proyectos', (req, res) => {
  res.json([{ id: 1, nombre: 'Mi primer proyecto' }]);
});

export default router;
