// vite.config.js
const { resolve } = require('path')
const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')
console.log(root);
console.log(outDir);

import { defineConfig } from 'vite'
export default defineConfig({
    base: '',
    build: {
        rollupOptions: {
          input: {
            main: resolve(__dirname, 'index.html'),
            results: resolve(__dirname, 'results', 'index.html')
          }
        }
      }
});


// // vite.config.js
// const { resolve } = require('path')
// const root = resolve(__dirname, 'src')
// const outDir = resolve(__dirname, 'dist')
// console.log(root);
// console.log(outDir);

// module.exports = {
//   root,
//   build: {
//     outDir,
//     emptyOutDir: true,
//     rollupOptions: {
//       input: {
//         main: resolve(__dirname, 'index.html'),
//         results: resolve(__dirname, 'results', 'index.html')
//       }
//     }
//   }
// }