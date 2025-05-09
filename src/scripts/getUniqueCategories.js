import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const getUniqueCategories = async () => {
  try {
    const products = await fs.readFile(PATH_DB, 'utf-8');
    const parsedProd = JSON.parse(products);

    return parsedProd.reduce((acc, { category }) => {
      if (acc.includes(category)) {
        return acc;
      }
      acc.push(category);
      return acc;
    }, []);
  } catch (error) {
    console.error(error);
  }
};

console.log(await getUniqueCategories());
