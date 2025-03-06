"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.primeiroValorMaior = primeiroValorMaior;
function primeiroValorMaior(valor1, valor2) {
    // Operador '?' ==> é equivalente a unha estructura if-else
    var result = false;
    //(valor1 > valor2) ? result = true : result = false;
    result = valor1 > valor2 ? true : false; // en caso verdadeiro executa o primeiro valor, que neste caso é true
    return result;
}
