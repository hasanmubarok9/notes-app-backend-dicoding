const fs = require('fs');

class StorageService {
  constructor(folder) {
    this._folder = folder;

    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder, { recursive: true });
    }
  }

  writeFile(file, meta) {
    const filename = +new Date() + meta.filename;
    const path = `${this._folder}/${filename}`;

    const fileStream = fs.createWriteStream(path);

    return new Promise((resolve, reject) => {
      fileStream.on('error', (error) => {
        console.log('yah error bor, errornya: ', error);
        reject(error);
      });
      file.pipe(fileStream);
      file.on('end', () => {
        console.log('masuk file on end\n');
        resolve(filename);
      });
    });
  }
}

module.exports = StorageService;
