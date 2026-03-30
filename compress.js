const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, 'public', 'images');

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function(file) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });
  return arrayOfFiles;
}

async function processImages() {
  const files = getAllFiles(dir);
  let count = 0;
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (ext === '.jpg' || ext === '.jpeg' || ext === '.png' || ext === '.webp') {
        const stats = fs.statSync(file);
        if (stats.size > 500 * 1024) { // only compress if > 500KB
            try {
                const inputBuffer = fs.readFileSync(file);
                const buffer = await sharp(inputBuffer)
                   .resize({ width: 1920, withoutEnlargement: true })
                   .jpeg({ quality: 80, force: false })
                   .png({ quality: 80, force: false })
                   .webp({ quality: 80, force: false })
                   .toBuffer();
                fs.writeFileSync(file, buffer);
                console.log("Compressed: " + file + " (old size: " + Math.round(stats.size/1024/1024) + "MB)");
                count++;
            } catch (e) {
                console.error("Failed to compress: ", file, e.message);
            }
        }
    }
  }
  console.log("Done compression! Compressed " + count + " images.");
}
processImages().catch(console.error);
