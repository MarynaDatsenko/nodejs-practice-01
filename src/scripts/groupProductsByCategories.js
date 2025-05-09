import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

const groupProductsByCategories = async () => {
  const category = await fs.readFile(PATH_DB, 'utf-8');
  const parseCategory = JSON.parse(category);
  return parseCategory.reduce((acc, { name, category }) => {
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(name);
    return acc;
  }, {});
};

console.log(await groupProductsByCategories());
