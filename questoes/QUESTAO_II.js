/* QUESTÃO II
Um bracket é considerado qualquer um dos seguintes caracteres: (, ), {, }, [ ou ].
Dois brackets são considerados um par combinado se o bracket de abertura (isto
é, (, [ou {) ocorre à esquerda de um bracket de fechamento (ou seja,),] ou} do
mesmo tipo exato. Existem três tipos de pares de brackets : [ ], { } e ( ).
Um par de brackets correspondente não é balanceado se o de abertura e o de
fechamento não corresponderem entre si. Por exemplo, { [ ( ] ) } não é balanceado
porque o conteúdo entre {e} não é balanceado. O primeiro bracket inclui o de
abertura, (, e o segundo inclui um bracket de fechamento desbalanceado,].
Dado sequencias de caracteres, determine se cada sequência de brackets é
balanceada. Se uma string estiver balanceada, retorne SIM. Caso contrário, retorne
NAO.
EXEMPLO 
{[()]} SIM 
{[(])} NAO 
{{[[(())]]}} SIM
 */
class Questao_2{
    constructor(bracket){
        this._bracket = bracket
    }

    executa(){
        let bracket = this._bracket;

        let flag = false;
        for (let i = 0; i < (bracket.length / 2); i++) {
            let bracketInicial = bracket[i];
            let bracketFinal = bracket[(bracket.length - 1) - i]
            if (`${bracketInicial}${bracketFinal}` != "()" &&
                `${bracketInicial}${bracketFinal}` != "{}" &&
                `${bracketInicial}${bracketFinal}` != "[]") {
                flag = true;
                break;
            }

        }
        if (flag) {
            return "Não"
        } else {
            return "Sim"
        }
    }
}
module.exports = Questao_2;