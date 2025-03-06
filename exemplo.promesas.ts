type TestDatosServer = {
    nome: string;
    apelido: string
}

async function funcionPromesa(url: string): Promise<TestDatosServer>{
    let valores = (await fetch(url)).json();
    let resultado = await valores
    
    return resultado;
}

 async function PintarDatosClientes() {
    let urlLocal = "http://localhost:3000/datos";
    let datos = await funcionPromesa(urlLocal);  
   
    console.log("resultado da funcion promesa ", datos)

    
} 

PintarDatosClientes()   




