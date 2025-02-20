function echo<T>(arg: T) : T {
    return arg;
}
let a = echo<number>(1); // El typeof es Number
let b = echo<String>("Hola mundo"); // El typeof es String
const echo2 = <T>(valor : T) : T => valor;
console.log(a,b)
console.log(echo2<number>(4))
console.log(echo2<string>("dfasdfa"))

function createlist<T>(items: Array<T>){
     return items
}; 
const list= createlist<string>(['Red', 'Blue', 'Green']);
console.log("lista 1 ", list);
const list2= createlist<number>([5, 8, 9]);
console.log("lista 2 ", list2);


interface Lista<T>{
    items:T[]
}

let valores: Lista<number> ={
    items:[4,6,9]
}

interface Diferentes<T>{
    items:T[],
    escribir: () => T[]
}

let diferentes : Diferentes<string> = {
    items: ['primer texto'],
    escribir: () => ['outro texto', 'isto é un pouco raro']
}

interface _Bloque<HTMLAnchorElement>{
    a: HTMLAnchorElement 
}
let etiquetaA: _Bloque<HTMLAnchorElement> = {
    a: document.createElement("a")
}
