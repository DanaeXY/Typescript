class GettersESetters{

    private valor1: string;
    valor2: string;

    constructor(valor1: string,valor2:string){
        this.valor1 = valor1;
        this.valor2 = valor2;
    }

    get devolverValor1(): string{
        return this.valor1
    }
    set actualizarValor1(valor: string){
        this.valor1 = valor;
    }

    devolverValor2(){
        return this.valor2
    }
}

let instanciaGettersESetters = new GettersESetters("primer texto ", "segundo texto");

console.log("valor de valor1 ", instanciaGettersESetters.devolverValor1);
instanciaGettersESetters.actualizarValor1 = "primer texto actualizado";

console.log("Valor 1 actualizado ", instanciaGettersESetters.devolverValor1)

instanciaGettersESetters.valor2 = "este é outro valor 2";

console.log(instanciaGettersESetters.devolverValor2())