// SOBRE TUPLAS
// SOBRE INTERFACES
// SOBRE FUNCIÓNS
// POR DEFECTO

/**
 * SOBRE TUPLAS
 */

// TUPLAS

let varios2: [boolean , string];// DECLARACIÓN DA TUPLA
varios2 = [true,"boas a todos"]
// qué ocorre se lle quitamos a 'varios2' o texto
//varios2 = [true]

let tuplaConOpcional : [boolean,number?,string?,string?]
tuplaConOpcional = [true]


/**
 * SOBRE INTERFACES
 */


// Deberemos crear un tipo de dato chamado interface
interface Vivenda {
    nomePropietario: string,
    numPortal1?: number,
    naVivenda: boolean
}
interface Edificio {
    escaleraPiso: number,
    portaPiso: number,
}
// let <nome da variable> : <tipo de variable> = <obxeto>
let datoVivenda: Vivenda = {
    nomePropietario: "Juan",
    naVivenda: true
}  
// ¿qué ocorre se non comentamos algunha variable?
// vemos que si comentamos algunha variable a variable 'edificio'
// sae erro
let edificio: Edificio = {
    escaleraPiso:5,
    portaPiso: 0
}

console.log(datoVivenda)


/**
 * SOBRE FUNCIONS
 * 
 */
function log1(message: string, userId: string) {
    let time = new Date().toLocaleTimeString();
    /* 
    console.log("userID ",userId)
    let resultado = userId && 'Not signed in'; 
    console.log("resultado da comparacion userId && 'Not signed in' ",resultado)
    */
    console.log(time, message, userId || 'Not signed in')
}
function log(message: string, userId?: string) {
    let time = new Date().toLocaleTimeString()
    console.log(time, message, userId || 'No ven a firma')
}

log1("isto é a mensaxe","dfasdfadf");
//log("isto é a mensaxe");

//POR DEFECTO: Na seguinte función utilizamos unha asignación na entrada da función => 
function log3(message: string, userId = 'Valor por defecto') {
    let time = new Date().toISOString()
    console.log(time, message, userId)
}
log3('User clicked on a button', 'da763be')
log3('User signed out')