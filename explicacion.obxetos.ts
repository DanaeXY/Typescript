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

console.log(datoCasa.nomePropietario)


