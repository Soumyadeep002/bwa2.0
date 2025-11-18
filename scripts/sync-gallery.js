// Script to sync gallery images from localStorage export to public/gallery.json
// Usage: node scripts/sync-gallery.js <path-to-exported-gallery.json>

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const exportedFilePath = process.argv[2];
const targetPath = path.join(__dirname, '../public/gallery.json');

if (!exportedFilePath) {
  console.error('Please provide the path to the exported gallery.json file');
  console.log('Usage: node scripts/sync-gallery.js <path-to-exported-gallery.json>');
  process.exit(1);
}

try {
  // Read the exported file
  const exportedData = fs.readFileSync(exportedFilePath, 'utf8');
  const galleryData = JSON.parse(exportedData);
  
  // Validate it's an array
  if (!Array.isArray(galleryData)) {
    throw new Error('Invalid JSON format. Expected an array of images.');
  }
  
  // Write to public/gallery.json
  fs.writeFileSync(targetPath, JSON.stringify(galleryData, null, 2), 'utf8');
  
  console.log('✅ Gallery images synced successfully!');
  console.log(`   Source: ${exportedFilePath}`);
  console.log(`   Target: ${targetPath}`);
  console.log(`   Images: ${galleryData.length}`);
} catch (error) {
  console.error('❌ Error syncing gallery:', error.message);
  process.exit(1);
}

