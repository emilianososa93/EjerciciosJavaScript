


function determinaClasificacionPorEdades (parametro){
    var edad = parametro.value;
    var resultado = null;
    
    if (edad >0 && edad < 12){
        resultado = "AA y A";
    } else if (edad >12 && edad < 15){
        resultado = "B, AA y A";
    } else if (edad >=15 && edad < 18){
        resultado = "B15, AA y A";
    }else if (edad >=18 && edad < 21){
        resultado = "C, B15, AA y A";
    }else if (edad >= 21 && edad < 90){
        resultado = "Puedes ver cualquier tipo de peliculas";
    }else if (edad >  90){
        resultado = "No es posible que tengas esa cantidad de años";
    }
    else{
        resultado = "Valor erroneo";
    }
    document.getElementById("resultado").innerHTML = resultado
}  

