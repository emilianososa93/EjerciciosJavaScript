
var nombre = null;

function mostrarNombre (parametro){
    nombre = parametro.value;
    var saludo =  "Hola " + nombre.toUpperCase() + " ,Bienvenido!";
    document.getElementById("resultado").innerHTML = saludo; 
}  

function saludarLocal (parametro){
    var nombre = parametro;
    alert("Hola " + nombre.toUpperCase() + " ,Bienvenido! (Local)");
    alert("Hola " + this.nombre.toUpperCase() + " ,Bienvenido! (Global)");
}

function saludarGlobal (){
    alert("Hola " + nombre.toUpperCase() + " ,Bienvenido!");
}