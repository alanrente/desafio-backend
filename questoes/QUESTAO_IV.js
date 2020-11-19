/* QUESTÃO IV
Dados n inteiros não negativos representando um mapa de
elevação onde a largura de cada barra é 1, calcule quanta
água é capaz de reter após a chuva.

EXEMPLO
Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6 */

class Questao_4{
    constructor(n){
        this._n = n;
        if (Array.isArray(this._n)) {
            let erro;
            this._n.forEach(elemento => {
                if (elemento < 0) {
                    erro = 'Contém menor que 0;'
                }
                if (!Number.isInteger(elemento)) {
                    erro = 'Contém elemento não numérico '
                }
            })
            if (erro) {
                return console.log(erro);
            }

        } else {
            return console.log('Não é um Array')
        }
    }
    
    executa(){
        let n = this._n;
        let barra1;
        let barra2;
        let posBarra1;
        let posBarra2;
        let vala = 0;
        if (Array.isArray(n)) {
            let erro;
            n.forEach(elemento => {
                if (elemento < 0) {
                    erro = 'Contém menor que 0;'
                }
                if (!Number.isInteger(elemento)) {
                    erro = 'Contém elemento não numérico '
                }
            })
            if (erro) {
                return erro;
            }

        } else {
            return 'Não é um Array'
        }
        for (let i = 0; i < n.length; i++) {
            barra1 = n[i];
            posBarra1 = i;
            for (let j = posBarra1; j < n.length; j++) {
                let elementoJ = n[j];
                if (elementoJ >= barra1 && i != j) {
                    barra2 = elementoJ;
                    posBarra2 = j;
                    for (let k = posBarra1; k < posBarra2; k++) {
                        let elementoK = n[k];
                        if (elementoK < barra1) {
                            vala += (barra1 - elementoK);
                        }
                    }
                    i = (posBarra2 - 1);
                    break;
                }
            }
        }
        return vala;
    }
}

module.exports = Questao_4;
