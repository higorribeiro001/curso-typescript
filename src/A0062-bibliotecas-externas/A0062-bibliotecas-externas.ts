// instalar a biblioteca validator no ts:
// primeiro instala a lib: npm i validator
// npm i validator @types/validator -D
// olhar a lib do lodash para arrays depois

import validator from 'validator';

console.log(validator.isEmail('luiz@gmail.com'));

// estendendo bibliotecas externas

import _ from './modulo';

const array = [100, 200, 300, 400];

console.log(_.sum(array));
console.log(_.min(array));
console.log(_.max(array));
console.log(_.mean(array));
console.log(_.mul(array));
