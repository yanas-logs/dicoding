const { EventEmitter } = require('events'); // TODO 1
 
const birthdayEventListener = (name) => {
  console.log(`Happy birthday ${name}!`);
}
 
const myEmitter = new EventEmitter(); // TODO 2
 
myEmitter.on('birthday', birthdayEventListener); // TODO 3
 
myEmitter.emit('birthday', 'myName' ); // TODO 4


/*

Kalau memang mau pakai object

Ubah listener untuk destructuring:

const birthdayEventListener = ({ name }) => {
  console.log(`Happy birthday ${name}!`);


myEmitter.emit('birthday', { name: 'yourName' });
*/
