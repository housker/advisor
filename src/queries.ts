import { pool } from '../pool';

export const insertStocksData = async (payload: string[]) => {
    const query = 'INSERT INTO stock_data (symbol, high, low, open, close, volume, time) VALUES ($1, $2, $3, $4, $5, $6, $7)';
    pool.query(query, payload, (err, result) => {
      console.log('result here', err);
    });
  };