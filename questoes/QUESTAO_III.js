/* QUESTÃO III
Digamos que você tenha um array para o qual o elemento i
é o preço de uma determinada ação no dia i.
Se você tivesse permissão para concluir no máximo uma
transação(ou seja, comprar uma e vender uma ação), crie
um algoritmo para encontrar o lucro máximo.
Note que você não pode vender uma ação antes de
comprar.
Input: [7, 1, 5, 3, 6, 4]
Output: 5(Comprou no dia 2(preço igual a 1) e vendeu no dia 5(preço igual a 6), lucro foi de 6– 1 = 5 
Input: [7, 6, 4, 3, 1] 
Output: 0(Nesse caso nenhuma transação deve ser feita, lucro máximo igual a 0) */

class Questao_3{
    constructor(numeros){
        this._numeros = numeros;
    }
    
    executa(){
        let numeros = this._numeros;
        let menor = 0;
        let maior = 0;
        let posicaoMenor = 0;
        let posicaoMaior = 0;

        for (let i = 0; i < numeros.length; i++) {
            let elemento = numeros[i];
            if (i == 0) {
                menor = elemento
            }
            if (elemento < menor) {
                menor = elemento
                posicaoMenor = numeros.indexOf(elemento);
            }
        }

        for (let j = posicaoMenor; j < numeros.length; j++) {
            let elemento = numeros[j]
            if (j == posicaoMenor) {
                maior = elemento
            }
            if (elemento > maior) {
                maior = elemento;
                posicaoMaior = numeros.indexOf(elemento)
            }
        }
        return maior - menor;
    }
}

module.exports = Questao_3;

const questao_3 = (numeros) => {
    let menor = 0;
    let maior = 0;
    let posicaoMenor = 0;
    let posicaoMaior = 0;

    for (let i = 0; i < numeros.length; i++) {
        let elemento = numeros[i];
        if (i == 0) {
            menor = elemento
        }
        if (elemento < menor) {
            menor = elemento
            posicaoMenor = numeros.indexOf(elemento);
        }
    }

    for (let j = posicaoMenor; j < numeros.length; j++) {
        let elemento = numeros[j]
        if (j == posicaoMenor) {
            maior = elemento
        }
        if (elemento > maior) {
            maior = elemento;
            posicaoMaior = numeros.indexOf(elemento)
        }
    }
    return maior - menor;
}

// console.log(questao_3([7,1,5,3,6,4]))