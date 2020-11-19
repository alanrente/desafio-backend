/* 
QUESTÃO I
Dado um array de números inteiros, retorne os índices dos
dois números de forma que eles se somem a um alvo
específico.
Você pode assumir que cada entrada teria exatamente uma
solução, e você não pode usar o mesmo elemento duas
vezes. 
EXEMPLO
Dado nums = [2, 7, 11, 15], alvo = 9,
    Como nums[0] + nums[1] = 2 + 7 = 9,
    return [0, 1].
    */

class Questao_1{
    constructor(numeros, alvo){
        this._numeros = numeros;
        this._alvo = alvo;
    }

    executa(){
        let numeros = this._numeros;
        let alvo = this._alvo;
        let indices;
        for (let i = 0; i < numeros.length; i++) {
            let elementoI = numeros[i];
            indices = [numeros.indexOf(elementoI)];
            for (let j = 0; j < numeros.length; j++) {
                let elementoJ = numeros[j]
                let soma = 0;
                if (i != j) {
                    soma = elementoI + elementoJ
                }
                if (soma == alvo) {
                    indices.push(numeros.indexOf(elementoJ))
                    return indices;
                }

            }
        }
    }
}

module.exports = Questao_1;