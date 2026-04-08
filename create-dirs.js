const fs = require('fs');
const path = require('path');

const baseDir = 'e:\\work\\portfolio\\nextjs-portfolio\\src\\app';

const dirs = ['projects', 'contact', 'cybersecurity'];

dirs.forEach(dir => {
  const fullPath = path.join(baseDir, dir);
  try {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`Created: ${fullPath}`);
  } catch (err) {
    console.error(`Failed to create ${fullPath}: ${err.message}`);
  }
});

console.log('Done! Directories created.');
