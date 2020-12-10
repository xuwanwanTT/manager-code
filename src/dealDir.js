const fs = require('fs');
const path = require('path');
const config = require('../config/config.js');

const { baseDir } = config;

const newBaseDir = path.join(process.cwd(), 'code');

const mkdir = () => {
  fs.mkdirSync(newBaseDir, function (err) { console.log(err) });

  const temp = JSON.stringify({ baseDir: newBaseDir });
  fs.writeFile(path.join(process.cwd(), 'config', 'config.js'), `module.exports=${temp};`, { flag: 'w' }, function (err) {
    console.log(`修改下载目录为 ${path.join(newBaseDir)}`);
  });

};

try {
  const dir = fs.statSync(baseDir, function (err, stat) { });
  if (!dir.isDirectory()) { mkdir(); }
} catch {
  mkdir();
}

module.exports = {
  baseDir: newBaseDir
}