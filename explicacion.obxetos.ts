/*
let obxeto = {
    numero: string,
    texto: "frase"
}
*/
// Deberemos crear un tipo de dato chamado interface
interface Casa {
    nomePropietario: string,
    numPortal: number,
    naVivenda: boolean
}

// let <nome da variable> : <tipo de variable> = <obxeto>
let datoCasa: Casa = {
    nomePropietario: "Juan",
    numPortal: 4,
    naVivenda: true
}  

console.log(datoCasa.nomePropietario);

let datoCasa2 = {
    nomePropietario: "Juan",
    numPortal: 4,
    naVivenda: true
}

// Métodos obxeto 
//const values = Object.keys(data).map(key => data[key]);

//console.log("Object", Object.values(datoCasa))
//console.log(Object.keys(datoCasa2).map((valor) => datoCasa2[valor]))
interface Icono{
    home:string,
    grupo:string,
    folla: string,
    etiqueta: string
}

//let icono : any;
let icono : Icono = {
    home:"./imaxes/Home.svg",
    grupo:"./imaxes/Persoas.svg",
    folla:"./imaxes/Rectangle.svg",
    etiqueta:"./imaxes/Shape.svg"
}


for(const variable in icono){
    console.log(`varible ${variable}, `)
    console.log(`${variable} ${icono[variable as keyof Icono]}`)
} 