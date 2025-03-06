"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.probandoIf = probandoIf;
var funcions_op_aritmeticas_ts_1 = require("./funcions.op.aritmeticas.ts");
var funcions_op_condicionais_ts_1 = require("./funcions.op.condicionais.ts");
/**
 *
 * Crea unha función, chamada ‘probandoIf’, onde:
 * debes utilizar unha estructura ‘if’ ,
 * a cal deberá realizar si:
 - Un número e maior que 5 e menor 10, realize a multiplicación
 - Un número é igual a 18 faga a división
 - Os dous valores son iguais, saia por consola “SON Números IGUAIS”
 - Un número é 19 faga a resta dos números
 */
function probandoIf(numero1, numero2) {
    var result = 0;
    var valorMinimo = 5;
    var valorMaximo = 10;
    // Poño a condición de que se as condicións se cumplen '1' && '1' => a * b ...mirar tabla de verdad ou es.javascript.info
    result = ((0, funcions_op_condicionais_ts_1.primeiroValorMaior)(numero1, valorMinimo) && (0, funcions_op_condicionais_ts_1.primeiroValorMaior)(valorMaximo, numero2)) ? (0, funcions_op_aritmeticas_ts_1.Multiplicar)(numero1, numero2) : 1;
    return result;
}
