
function determinarSecuenciaNumero(parametro){
    limpiarSecuencia();
    var valor = parametro.value; 
    if (valor > 0){
       for (i=0; i< valor ; i++){
        document.getElementById("resultado").innerHTML += i + " "  
       }
    }
    else{
        document.getElementById("resultado").innerHTML  = "Ingrese un valor positivo";  
    }
     
    
}

function limpiarSecuencia()
{
    document.getElementById("resultado").innerHTML  = " "; 
    valor.value= " ";
}