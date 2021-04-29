/**
 * Efetua a soma de dois números
 * 
 * @author Marcel Menezes
 * @version 1.0
 * @param  float {num1} Primeiro número a ser adicionado
 * @param float {num2} Segundo número a ser adicionado
 * @return float Retorna a soma de dois números
 */ 

function Soma (num1, num2){
    return (parseFloat(num1)+parseFloat(num2)).toFixed(2)
}

module.exports = Soma