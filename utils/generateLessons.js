const fs = require('fs');
const marked = require('marked');

const Units = [];

for (unit of fs.readdirSync('./src/units/')) {
  const u = { name: unit, chapters: [] };

  for (chapter of fs.readdirSync('./src/units/' + unit)) {
    const ch = { name: chapter, result: '', files: {} };
    for (file of fs.readdirSync('./src/units/' + unit + '/' + chapter)) {
      const filePath = './src/units/' + unit + '/' + chapter + '/' + file;
      const data = fs.readFileSync(filePath, { encoding: 'utf-8' });

      if (file.toLowerCase() === 'readme.md') {
        ch.readme = marked(data);
      } else if (file.toLowerCase() === 'result.txt') {
        ch.result = data;
      } else {
        ch.files[file] = data;
      }
    }
    if (!('main.cpp' in ch.files) || !('readme' in ch)) {
      console.error('Main and Readme are required for chapter: ' + chapter + ' of unit: ' + unit);
      process.exit(1);
    }
    u.chapters.push(ch);
  }
  Units.push(u);
}

const content = 'const units = ' + JSON.stringify(Units) + ';';
const path = process.argv[2] + 'lessons.js';

fs.writeFileSync(path, content);
