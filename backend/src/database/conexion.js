// configuracion de la conexion a la base de datos, este archivo no debe ser modificado

import { Sequelize } from 'sequelize';
import 'dotenv/config';

export const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false, // No muestra las consultas en consola
});


export const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conectado correctamente a la base de datos');
  } catch (error) {
    console.error('Error al conectarse a la base de datos:', error);
    process.exit(1);
  }
};