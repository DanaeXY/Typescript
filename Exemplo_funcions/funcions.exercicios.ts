import { Multiplicar } from "./funcions.op.aritmeticas.ts";
import { primeiroValorMaior } from "./funcions.op.condicionais.ts";
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


function probandoIf(numero1: number,numero2: number) : number{
    let result : number = 0;
    let valorMinimo : number = 5;
    let valorMaximo : number = 10;
    // Poño a condición de que se as condicións se cumplen '1' && '1' => a * b ...mirar tabla de verdad ou es.javascript.info
    result = (primeiroValorMaior(numero1,valorMinimo) && primeiroValorMaior(valorMaximo,numero2)) ?  Multiplicar(numero1,numero2) : 1;

    return result;
 }

 export {
    probandoIf
 }
