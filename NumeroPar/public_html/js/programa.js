document.write("Programa para determinar si un nunmero es par:<br/>");

var num = parseInt(prompt("Ingrese un numero:",1));

if (num >= 0){
    if (num%2 == 0){
        document.write("El numero ingreso es par");
    }
    else{
        document.write("El numero ingreso es impar");
    }
}else {
    document.write("El numero ingreso no es entero o mayor a cero");
}


