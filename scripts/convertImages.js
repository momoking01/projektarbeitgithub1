import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = 'public/';
const outputDir = 'public/optimized/';

// ✅ Falls der Ordner nicht existiert, erstelle ihn
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// ✅ Konvertiere alle Bilder
fs.readdirSync(inputDir).forEach(file => {
    if (file.endsWith('.jpg') || file.endsWith('.png')) {
      sharp(path.join(inputDir, file))
        .toFile(
          path.join(outputDir, file.replace(/\.(jpg|png)$/, '.webp'))
        )
        .then(() => console.log(`✅ Konvertiert: ${file} → ${file.replace(/\.(jpg|png)$/, '.webp')}`))
        .catch(err => console.error(`❌ Fehler bei ${file}:`, err));
    }
  }); 
  
console.log("🚀 Alle Bilder wurden in WebP konvertiert!");
