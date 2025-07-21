// src/app.js
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import expressOasGenerator from 'express-oas-generator';
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import ProyectoRouter from './routers/proyecto.routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Asegurar que NODE_ENV esté definido
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const App = express();

// Middlewares
App.use(morgan('dev'));
App.use(express.json());
App.use(cors({
  origin: 'https://tudominio.vercel.app',
  credentials: true
}));

// Montar rutas con prefijo '/api'
App.use('/api', ProyectoRouter);

// Swagger estático
const openApiPath = path.join(__dirname, '../swagger/openapi.json');
if (fs.existsSync(openApiPath)) {
  const swaggerDocument = JSON.parse(fs.readFileSync(openApiPath, 'utf-8'));
  App.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}


export default App;
