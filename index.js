const Questao1 = require('./questoes/QUESTAO_I');
const Questao2 = require('./questoes/QUESTAO_II');
const Questao3 = require('./questoes/QUESTAO_III');
const Questao4 = require('./questoes/QUESTAO_IV');

const questao1 = new Questao1([2, 7, 11, 15], 18);
console.log(questao1.executa());

const questao2 = new Questao2('{[(])}');
console.log(questao2.executa());

const questao3 = new Questao3([7, 1, 5, 3, 6, 4]);
console.log(questao3.executa())

const questao4 = new Questao4([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
console.log(questao4.executa());