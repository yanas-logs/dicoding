// TODO: tampilkan teks pada notes.txt pada console.
const fs = require('fs');

const readFileCallback = (error, data) => {
if(error){
console.log('Gagal');
}
console.log(data);
}

fs.readFile('notes.txt', 'UTF-8', readFileCallback);
