/**
 * Se requiere un programa que modele el concepto de un planeta del sistema solar.
 * Un planeta tiene los siguientes atributos:
 * - Un nombre de tipo String con valor inicial de null.
 * - Cantidad de satélites de tipo int con valor inicial de cero.
 * - Masa en kilogramos de tipo double con valor inicial de cero.
 * - Volumen en kilómetros cúbicos de tipo double con valor inicial de cero.
 * - Diámetro en kilómetros de tipo int con valor inicial de cero.
 * - Distancia media al Sol en millones de kilómetros, de tipo int con valor inicial de cero.
 * - Tipo de planeta de acuerdo con su tamaño, de tipo enumerado con los siguientes valores posibles: GASEOSO, TERRESTRE y ENANO.
 * - Observable a simple vista, de tipo booleano con valor inicial false.
 * 
 * La clase debe incluir los siguientes métodos:
 * > La clase debe tener un constructor que inicialice los valores de sus respectivos atributos.
 *  -> Definir un método que imprima en pantalla los valores de los atributos de un planeta.
 *  -> Calcular la densidad un planeta, como el cociente entre su masa y su volumen.
 *  -> Determinar si un planeta del sistema solar se considera exterior.
 *  -> Un planeta exterior está situado más allá del cinturón de asteroides. El cinturón de asteroides se encuentra entre 2.1 y 3.4 UA. 
 * 
 * Una unidad astronómica (UA) es la distancia entre la Tierra y el Sol = 149597870 Km.
 * En un método 'main' se deben crear dos planetas y mostrar los valores
 * de sus atributos en pantalla. Además, se debe imprimir la 
 * densidad de cada planeta y si el planeta es un planeta exterior del sistema solar.
 */

class Planeta{

        public nome: string = ""; // En Java sí permite o valor null como inicialización
        public numSatelites: number;
        public masaPlanteta: number;
        public volumenPlaneta: number = 0;
        public diametroPlaneta: number = 0;
        public distanciaMedia: number = 0;
        public distanciaSol: number = 0;
        public observable: boolean = false;

        constructor(nome:string, numSatelites: number, masaPlaneta: number, volumenPlaneta: number,diametroPlaneta : number,distanciaMedia: number, distanciaSol: number,observable: boolean){
            this.nome = nome;
            this.numSatelites = numSatelites; 
            this.masaPlanteta = masaPlaneta;
            this.volumenPlaneta = volumenPlaneta;
            this.diametroPlaneta = diametroPlaneta;
            this.distanciaMedia = distanciaMedia;
            this.observable = observable;
            this.distanciaSol = distanciaSol;
        }

        public imprimir(): void{
            console.log(`Datos ${this.nome} , ${this.numSatelites}, ${this.masaPlanteta}, ${this.volumenPlaneta}, ${this.diametroPlaneta}, ${this.distanciaMedia}`);
            (this.observable === false) ? console.log("non é observable ") : console.log("é un planeta observable")
        }

        public calcularDensidad(): number {
            return this.masaPlanteta/this.volumenPlaneta;
        }
        public esPlanetaExterior(): boolean{
            let result: boolean;
            let limite: number;
            limite = (149597870 * 3.4);//508.632.758
            /* Un planeta exterior está situado más allá del cinturón de asteroides */
            /* El cinturón se encuentra entre 2,1 y 3,4 UA (UA = 149.597.870 Km) */

            (this.distanciaSol > limite) ? result = true : result = false;


            return result
        }

        public testVariables(): void{
            console.log('distanciaMedia ',this.distanciaMedia,this.numSatelites)
        }
}

let instanciaPlaneta = new Planeta('ChatGPT',4,2345254254252345,1083320000000,12756,10833200000,10833200000,true);
// 10833200000 > 508632758
instanciaPlaneta.imprimir();
let densidade = instanciaPlaneta.calcularDensidad();
console.log(`A densidade do planeta ChatGPT é ${densidade}`,densidade)

console.log("é planeta ? ",instanciaPlaneta.esPlanetaExterior())

