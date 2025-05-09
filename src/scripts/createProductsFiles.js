import fs from 'node:fs/promises';
import path from 'node:path';
import { PATH_DB } from '../constants/products.js';
import { PATH_FILES_DIR } from '../constants/products.js';

const toKebabCase = (str) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export async function createProductsFiles() {
  const fileData = await fs.readFile(PATH_DB, 'utf-8');
  const products = JSON.parse(fileData);

  await fs.mkdir(PATH_FILES_DIR, { recursive: true });

  await Promise.all(
    products.map(async (product) => {
      const kebabName = toKebabCase(product.name);
      const filePath = path.join(PATH_FILES_DIR, `${kebabName}.json`);
      const jsonContent = JSON.stringify(product, null, 2);
      await fs.writeFile(filePath, jsonContent, 'utf-8');
      console.log(`File created: ${filePath}`);
    }),
  );
}

createProductsFiles();
