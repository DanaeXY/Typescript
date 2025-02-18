/**
 * Poderíamos utilizar unha variable enum, cando necesitemos ter unha descripción en eleccións
 * en condicionais
 * 
 */

/** Declaración de variables */

enum Color {Red, Green, Blue};
enum Color2 {Red = 1, Green = 2, Blue = 4};
enum Color3 { red, blue, green } 

let a: Color = Color.Red;
let c: Color = Color.Green;

console.log("enum c", c)
console.log("enum a", a)

let a2: Color = Color.Red; // 1
let b2: Color = Color.Blue;// 4
let c2: Color = Color.Green; // 2

console.log("enum b2 ", b2);
console.log("enum c2 ", c2);


// Exemplo onde se observa cómo empregar un tipo 'enum', para describir unha posible selección

function log(color: Color3, message: string): void { 
    switch (color) { 
        case Color3.red: 
            console .log( '#ffoooo ', message); 
            break; 
        case Color3.blue: 
            console.log('#ooooff', message); 
            break; 
        case Color3.green: 
            console .log( ' #ooffoo', message); 
            break; 
    } 
} 
console.log("Color3.blue ",Color3.blue)
log(Color3.blue, "estou a meter o azul")


    