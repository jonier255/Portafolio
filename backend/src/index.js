// src/index.js - Versión simple sin express-oas-generator
import { PORT } from './config/puerto.js';
import { connectDB } from './database/conexion.js';
import App from './app.js';

const iniciarServidor = async () => {
  try {
    await connectDB();

    const server = App.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
      console.log(`📚 Documentación disponible en http://localhost:${PORT}/api-docs`);
    });

  } catch (error) {
    console.error('❌ Error al iniciar el servidor:', error);
  }
};

iniciarServidor();