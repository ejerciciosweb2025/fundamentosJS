class CalculadoraMagica{
    numero1;
    numero2;
    resultado;
 
    constructor(){
       this.numero1=0;
       this.numero2=0;
       this.resultado=0;
    }

    sumar(numero1, numero2){
        this.resultado += numero1+ numero2;
        return this.resultado;
    }

    restar(numero1,numero2){
        this.resultado += numero1- numero2;
        return this.resultado;

    }

    multiplicacion(numero1,numero2){
        this.resultado += numero1* numero2;
        return this.resultado;
    }

    division(numero1,numero2){
        this.resultado += numero1/numero2;
        return this.resultado;
    }

    setCambiaNumero1(n1){
        this.numero1=n1;
    }
    setCambiaNumero2(n2){
        this.numero2=n2;
    }

    getNumero1(){
        return this.numero1;
    }
    getNumero2(){
        return this.numero2;
    }

    devuelvemeResultados(){
        return `${this.resultado}`;
    }

}


calculadora = new CalculadoraMagica();

calculadora.setCambiaNumero1(2);
calculadora.setCambiaNumero2(3);
console.log(calculadora);

calculadora.sumar(2,2);
console.log(calculadora.devuelvemeResultados());
calculadora.restar(1,1);
console.log(calculadora.devuelvemeResultados());

calculadora.multiplicacion(3,3);
console.log(calculadora.devuelvemeResultados());

calculadora.division(1,1);
console.log(calculadora.devuelvemeResultados());