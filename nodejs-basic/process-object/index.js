// TODO 1: Ambil penggunaan memori awal (heapUsed)
const initialMemoryUsage = process.memoryUsage().heapUsed;

// TODO 2: Ambil nama dari argumen ke-2 (argv[2])
const yourName = process.argv[2];

// TODO 3: Ambil environment dari process.env.NODE_ENV
const environment = process.env.NODE_ENV;

// Proses looping ini akan membuat penggunaan memori naik
for (let i = 0; i <= 10000; i++) {
  // hanya loop untuk menaikkan penggunaan memori
}

// TODO 4: Ambil penggunaan memori setelah looping
const currentMemoryUsage = process.memoryUsage().heapUsed;

// Cetak hasil ke console
console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`);
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);
