import { probandoIf } from "./Exemplo_funcions/funcions.exercicios.ts";


let valor1: number = 3;
let valor2: number = 9;
let result : number | string;

result = probandoIf(valor1,valor2)
result = result > 1 ? result : "Valor é menor"; 
console.log(result)


