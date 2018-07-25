function mostrar()
{

var sexo = prompt("ingrese f ó m .");

//sexo.tolowcase() para que si ingreso mayuscula o minuscula da igual.
//

while (sexo !="f" && sexo !="m"){  
       sexo=prompt("error,ingrese f o m");
}

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN