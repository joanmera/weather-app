function Perro (raza, correa,reaccion) {
    this.raza = raza;
    this.correa = correa;
    this.reaccion = reaccion
    }
    
Perro.prototype.peligro  = function() {
  console.log("ladrar");
}
    
 perro_1= new Perro("bullterrier","macbully","morder");
 perro_2= new Perro("snauser","cuttepets","correr");
 
console.log(perro_1.raza);
console.log(perro_1.correa);
perro_1.peligro()

console.log(perro_2.raza);
console.log(perro_2.correa);
perro_2.peligro()


