import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';
import { createFakeProduct } from '../utils/createFakeProducts.js';

export const generateProducts = async (number) => {
  const randomGeneratedProducts = [];
  for (let i = 0; i <= number; i++) {
    const product = createFakeProduct();
    randomGeneratedProducts.push(product);
  }

  const dbProductData = await fs.readFile(PATH_DB, 'utf-8');

  const resultArr = JSON.parse(dbProductData).concat(randomGeneratedProducts);

  await fs.writeFile(PATH_DB, JSON.stringify(resultArr, null, 2), 'utf-8');

  console.log(`${number} products generated!`);
};

generateProducts(5);
