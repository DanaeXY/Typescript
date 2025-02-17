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

let instancia = new Persona('Pepito','Pérez Ramirez','342432424J',1900);
let instancia2 = new Persona2('Juanito','Pérez Dominguez','dfasd32424J',1900);

instancia.imprimir();
instancia2.imprimir()