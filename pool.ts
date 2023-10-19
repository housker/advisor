import { Pool } from 'pg';
import { config } from './config';

const { databaseOptions } = config;

export const pool = new Pool({
  user: databaseOptions.user,
  password: databaseOptions.password,
  host: databaseOptions.host,
  port: databaseOptions.port,
  database: databaseOptions.database,
  ssl: databaseOptions.ssl,
});

module.exports = pool;