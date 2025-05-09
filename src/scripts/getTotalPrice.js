import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const getTotalPrice = async () => {
  try {
    const products = await fs.readFile(PATH_DB, 'utf-8');
    const parsedProducts = JSON.parse(products);

    // let totalPrice = 0;
    // parsedProducts.map(({ price }) => {
    //   totalPrice += Number(price);
    // });
    //return totalPrice;

    return parsedProducts.reduce((acc, { price }) => (acc += Number(price)), 0);
  } catch (error) {
    console.error('Error reading the database:', error);
  }
};
console.log(await getTotalPrice());
