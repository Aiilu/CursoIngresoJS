function mostrar()
{
//tomo la edad  
var edad;

edad = document.getElementById("edad").value;

if (edad>18){
alert("es mayor de edad");
}

// conviene parsear cada vez que hay numeros

else {
    if (edad<18){
        alert("es menor de edad");
    }
}



}//FIN DE LA FUNCIÓN