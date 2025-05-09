import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

export const getProductsByMinPrice = async (num) => {
  try {
    const collection = await fs.readFile(PATH_DB, 'utf-8');
    const parsCollection = JSON.parse(collection);

    return parsCollection.filter(({ price }) => price >= num);
  } catch (error) {
    console.error('Error reading the database:', error);
  }
};

console.log(await getProductsByMinPrice(400));
