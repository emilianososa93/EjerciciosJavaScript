
function determinarDiaSegunFecha(entrada){
    var fechatexto = null;
    var fecha = new Date(entrada.value);
    dia = fecha.getDay();
    console.log("El dia seleccionado es:" + dia);
    
    switch (dia){
        case 0:
            fechatexto = "El dia es Lunes";
            break;
        case 1:
            fechatexto = "El dia es Martes";
            break;
        case 2:
            fechatexto = "El dia es Miercoles";
            break;
        case 3:
            fechatexto = "El dia es Jueves";
            break;
        case 4:
            fechatexto = "El dia es Viernes";
            break;
        case 5:
            fechatexto = "El dia es Sabado";
            break;
        case 6:
            fechatexto = "El dia es Domingo";
            break;
        default:
            fechatexto = "Valor erronea en la fecha";
            break;            
    }
    // agarro el id definido en el html y lo igualo al resultado.
    document.getElementById("resultado").innerHTML = fechatexto;
}