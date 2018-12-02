document.write("Programa para determinar la cantidad de digitos de un numero:<br/>");
var num = parseInt(prompt("Ingrese un numero:",1));
var cantidad_digitos = 0; 

if (num > 0){
  while (num >= 1){
    num = num / 10;
    cantidad_digitos++;
    }
   document.write("La cantidad de digitos es:" + cantidad_digitos );
}
else {
    document.write("El numero ingresado no es un valor valido");
}








