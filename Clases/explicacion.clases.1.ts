/**
 * A clase 'Persona' contén variables/atributos
 * que son públicos ==> 'public',
 * iso fai que mediante unha 'INSTANCIA'
 * podamos acceder a elas a igual que a os métodos públicos,
 * como por exemplo a 'imprimir'
 */
class Persona{
    public nome: string;
    public apelidos: string;
    public dni: string;
    public anoNacemento: number;

    constructor(nome: string,apelidos: string, dni: string, anoNacemento: number){
        this.nome = nome;
        this.apelidos = apelidos;
        this.dni = dni;
        this.anoNacemento = anoNacemento;
    }

    public imprimir(){
        console.log(`A persoa chámase ${this.nome}, apelídase ${this.apelidos}\no seu dni é: ${this.dni} \no ano de nacemento ${this.anoNacemento}`)
    }

}

/**
 * A clase 'Persona2' contén variables/atributos
 * que son privados ==> 'private',
 * iso fai que mediante unha 'INSTANCIA'
 * NON PODAMOS a elas 
 */
class Persona2{
    private nome: string;
    private apelidos: string;
    private dni: string;
    private anoNacemento: number;

    constructor(nome: string,apelidos: string, dni: string, anoNacemento: number){
        this.nome = nome;
        this.apelidos = apelidos;
        this.dni = dni;
        this.anoNacemento = anoNacemento;
    }

    public imprimir(){
        console.log(`A persoa chámase ${this.nome}, apelídase ${this.apelidos}\no seu dni é: ${this.dni} \no ano de nacemento ${this.anoNacemento}`)
    }

}

let instancia = new Persona('Pepito','Pérez Ramirez','342432424J',1900);// Inicializamos as variables
let instancia2 = new Persona2('Juanito','Pérez Dominguez','dfasd32424J',1900);

console.log("instancia.anoNacemento ", instancia.anoNacemento);// deste xeito accederemos a variables públicas
// Non podemos acceder ás varibles privadas 'instancia.anoNacemento' 
instancia.imprimir();
instancia2.imprimir();