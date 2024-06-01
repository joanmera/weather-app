const arreglo_origin = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
var numerosPrimos = [];

for (var i=0;i < arreglo_origin.length; i++) {

  if (esprimo(arreglo_origin[i])) {
    numerosPrimos.push(arreglo_origin[i]);
  }
  
}

function esprimo(numero) {
    for (var i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return numero !== 1;
  }



console.log(numerosPrimos);

