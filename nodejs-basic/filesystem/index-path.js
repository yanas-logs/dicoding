const path = require('path'); // ✅ impor path

const filePath = path.resolve(__dirname, 'notes.txt'); // ✅ __dirname, bukan _dirname
console.log(filePath);

