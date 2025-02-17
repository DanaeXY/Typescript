/**
 * Nos interfaces definimos métodos ou varibles
 * 'IMPLEMENTA a interface Printable na CLASE MyClass'
 */
interface Printable { 
    print(): void;// método a implementar na clase 'class MyClass' 
    valor: number;// variable a implementar na clase 'class MyClass'
}
/**
 * Se omitísemos algo da interface daría erro a 'class'
 * Necesitamos o constructor
 */
class MyClass implements Printable { 
    public valor: number;// temos que definir esta variable sí o sí, porque está na 'interface Printable'

    constructor(valor: number){
        this.valor = valor;// this.valor debe ter unha variable definida 'public valor'
    } 

    print() : void {   
        console .log('Printing . .. ', this.valor); 
    } 

    /**
     * Poderíamos seguir en adiante definindo métodos
     */
}

let imprimo = new MyClass(24);

imprimo.print()