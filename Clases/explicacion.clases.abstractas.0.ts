/**
 * Unha clase abstracta vainos obligar a implementar,
 * na clase que se extende os métodos implementados nela.
 * Ademáis de que os métodos implementados deberán ser tamén
 * abstractos
 */

abstract class Animal {
    protected name: string;
    constructor(name: string) {
        this.name = name;
    }
    abstract makeSound(): void;
    abstract makeSomething(): void;
    /*
        ## Darán erro ##
        public comprarLeite(): number;
        private comproCarne(): string;
        static comproAzucre(): number; 
    */
}

class Cat extends Animal {
/**
 * Esta clase deberá conter os 
 * métodos abstractos creados previamente.
 * A maiores, este métodos declarados serán 
 * PÚBLICOS
 * Aquí o ter `this.name` estamos accedendo a variable da clase inicial
 */
    makeSound(): void {
        console.log(`${this.name} meows.`);
    }
    makeSomething(): void{}
    
}
   const cat = new Cat("pepito");
   cat.makeSound(); // Output: Whiskers meows. 