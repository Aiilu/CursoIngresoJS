function mostrar()
{

    var num = prompt("Ingrese un número entre 0 y 10.");

	while (!(num >=0 && num <=9)){
	num = prompt("Ingrese nuevamente un número entre 0 y 10.");
	}
	
	document.getElementById("Numero").value=num;

	


}//FIN DE LA FUNCIÓN