class Conta{
    public saldo: number = 0;

    constructor(saldo: number){
        this.saldo = saldo;
    }

    ingresarCartos(cartos:number):void{
        this.saldo = cartos + this.saldo;
    }
    sacarCartos(cartos:number):number{
        this.saldo = this.saldo - cartos
        return this.saldo;
    }
    consultarSaldo():number{
        return this.saldo
    }
}


class CompraProducto extends Conta{

    precioProducto: number;
    cartosCliente: number;

    constructor(saldo: number,precioProducto: number,cartosCliente: number){
        super(saldo)
        this.precioProducto = precioProducto;
        this.cartosCliente = cartosCliente;
    }

    isCompradoProducto(): boolean{
        let resultado = false;
        if(super.consultarSaldo() >= this.precioProducto && this.cartosCliente >= this.precioProducto){
            
            this.sacarCartos(this.cartosCliente) 
            console.log(this.saldo)
            resultado = true;
            
        }
        return resultado
    }
    consultarSaldo(): number {
        return super.consultarSaldo()
    }
    compraProducto(){
        (this.isCompradoProducto() && true) ? console.log("Comprouse o producto") : console.log("Non chega a pasta")
    }
}

/*
// Inicio a conta con 50
let instanciaConta = new Conta(50);
// Ingreso 25
instanciaConta.ingresarCartos(25);

console.log("consultarSaldo ",instanciaConta.consultarSaldo());

let ingreso2MaisSado = instanciaConta.ingresarCartos(100);

console.log("consultarSaldo 2 ",instanciaConta.consultarSaldo())
*/
// Inicializo CompraProducto, cargamos unha tarxeta con saldo de 50
// Ingreso o precio do producto 30
// Ingreso o diñeiro do cliente 30
let instanciaCompraProducto = new CompraProducto(50,30,30)
instanciaCompraProducto.compraProducto()
let cartosQueQuedan = instanciaCompraProducto.consultarSaldo()
console.log("cartosQueQuedan  ",cartosQueQuedan)

