const fs = require('fs');

fs.readFile('nodejs_file_1.js', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
