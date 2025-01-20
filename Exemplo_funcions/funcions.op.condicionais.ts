function primeiroValorMaior(valor1:number ,valor2: number): boolean{
    // Operador '?' ==> é equivalente a unha estructura if-else
    let result : boolean = false;
    //(valor1 > valor2) ? result = true : result = false;
    result = valor1 > valor2 ? true : false;// en caso verdadeiro executa o primeiro valor, que neste caso é true
    return result;
}

export{
    primeiroValorMaior
}