/**
 * Na seguinte clase, temos unha variable a que formalmente se lle chama 'Atributo'
 * onde a través do método 'print' lle paso un novo valor
 * e se visualiza ese novo valor, cando accedo o método 'colloOnumero'
 */
class ClassAtributos {
    // Atributo 'numero'
    public numero:number = 0;

    print(num:number): void {
        this.numero = num;
        console.log(`estou no método print con número lido ${this.numero}`)
    };
    colloOnumero(): void{
        console.log("dende colloOnumero o número segue sendo ",this.numero)
    }
    suma(): void{
        console.log('Sumo o valor de entrada + 4 ',this.numero + 4)
    }
}
// Instancio a Clase
let instanciaClassAtributos = new ClassAtributos();
// Paso o número 5
instanciaClassAtributos.print(5);
// Chamo o método colloOnumero, onde conterá o valor 5
instanciaClassAtributos.colloOnumero();
instanciaClassAtributos.suma()