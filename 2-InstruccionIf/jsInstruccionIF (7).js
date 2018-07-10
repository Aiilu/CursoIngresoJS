function mostrar()
{
//tomo la edad  
var edad;
var estadoCivil;

edad=document.getElementById("edad").value;
estadoCivil=document.getElementById("estadoCivil").value;

if (edad<13 && estadoCivil=="Soltero"){
alert(edad+" es muy pequeño para NO ser "+estadoCivil);
}

	


}//FIN DE LA FUNCIÓN