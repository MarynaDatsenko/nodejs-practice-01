import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

export async function modifyProducts() {
  const fileData = await fs.readFile(PATH_DB, 'utf-8');
  const parseData = JSON.parse(fileData);

  const modifyProducts = parseData.map((prod) => {
    const cloneProd = { ...prod };
    delete cloneProd.description;
    return cloneProd;
  });
  await fs.writeFile(PATH_DB, JSON.stringify(modifyProducts, null, 2), 'utf-8');
}

modifyProducts();
