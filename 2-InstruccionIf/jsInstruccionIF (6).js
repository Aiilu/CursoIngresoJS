function mostrar()
{
//tomo la edad  
var edad;

edad = document.getElementById("edad").value;

edad = parseInt(edad);

//se pone else por que son condiciones excluyentes, toman uno por uno en vez de tomar los 3 juntos
//

if (edad>17){
alert("es adulto");

}

if (edad<13){

alert("es niño");
}

if (edad>13){

alert ("es adolescente");
}





}//FIN DE LA FUNCIÓN