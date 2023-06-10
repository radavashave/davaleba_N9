const validator = require('validator');
const { default: isEmail } = require('validator/lib/isEmail');

console.log(isEmail('test@test.com'))
console.log(isEmail('Adawdvwe'))