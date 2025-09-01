// Readable and Writeable : running both

const fs = require('fs');

const readableStream = fs.createReadStream('./inputWriteable.txt', {
  highWaterMark: 15,
});
const writableStream = fs.createWriteStream('outputChunk.txt');

readableStream.on('data', (chunk) => {
  const formattedChunk = `[${chunk.toString()}]`;
  process.stdout.write(formattedChunk);  // tampilkan di terminal
  writableStream.write(formattedChunk); // tulis ke file
});

readableStream.on('end', () => {
  writableStream.end('\n[null]Done\n');
  console.log('\nSelesai membaca file.');
});
