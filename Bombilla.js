class Bombilla{
    constructor(estado="false"){
        this.estado = estado;
    }
    pulsarInterrumptor(){
        if(this.estado == false){
            this.estado = true;
        }
        else{
            this.estado = false;
        }
    }
    mirarBombilla(){
        return (this.estado);
    }
}

let mibombilla = new Bombilla();
console.log(mibombilla);
for(i=0;i<10;i++){
    mibombilla.pulsarInterrumptor() ;
    console.log("Pulso el interruptor: "+i + " "+ mibombilla.mirarBombilla());

}
console.log("Miro bombilla " + mibombilla.mirarBombilla());
mibombilla.mirarBombilla();

console.log("Pulso el interruptor otra vez " + mibombilla.mirarBombilla());
mibombilla.pulsarInterrumptor();

mibombilla.mirarBombilla();
console.log("Miro bombilla " + mibombilla.mirarBombilla());
