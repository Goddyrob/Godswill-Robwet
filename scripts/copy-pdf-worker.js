import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function copyWorker() {
  const jsSrc = path.resolve(__dirname, '..', 'node_modules', 'pdfjs-dist', 'build', 'pdf.worker.min.js');
  const mjsSrc = path.resolve(__dirname, '..', 'node_modules', 'pdfjs-dist', 'build', 'pdf.worker.min.mjs');
  const src = fs.existsSync(jsSrc) ? jsSrc : (fs.existsSync(mjsSrc) ? mjsSrc : null);
  const destDir = path.resolve(__dirname, '..', 'public');
  const dest = path.join(destDir, 'pdf.worker.min.js');

  if (!src) {
    console.error('pdf.worker.min.(js|mjs) not found in node_modules/pdfjs-dist/build. Run npm install first.');
    process.exit(1);
  }

  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

  fs.copyFileSync(src, dest);
  console.log('Copied pdf.worker.min.js to public/');
}

copyWorker();
