/**
 * O tipo 'void' indica que a función NON DEVOLVE NINGÚN VALOR
 */
class ClassA {
    print(): void {
        console.log(`ClassA.print() called.`)
    };
}

class ClassB {
    print(): void {
        console.log(`ClassB.print() called.`)
    };
}


let instanciaExplicacion = new ClassA();
let instanciaDous = new ClassB();

instanciaDous.print();
instanciaExplicacion.print();