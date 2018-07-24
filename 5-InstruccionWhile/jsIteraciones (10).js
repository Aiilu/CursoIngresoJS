function mostrar()
{

	var contadorNeg=0;
	var contadorPosit=0;
	var acumuladorPosit;
	var acumuladorNeg;
	var num;
	var positivo=0;
	var negativo=1;
	var promedioPosit;
	var promedioNeg;
	var cantPosit;
	var cantNegat;
	var contadorCeros;
	var dif;

	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		
		num=prompt("Ingrese numero");
		num=parseInt(numero);

	while (isNaN(num)){
		num=prompt("Ingrese numero");
		num=parseInt(numero);
		

		}

		if (num<0){
		positivo+=num;
		negativo+num;
		contadorNeg++;
		contadorPosit++;
	}

	else if (num>0){
		contadorPosit++;
		acumuladorPosit++;


	}
	else {
		contadorCeros++;

	}

		if (num%2==1){
			contadorCeros++;
		}
 

		
	
	}
	promedioPosit=acumuladorPosit/contadorPosit;
	promedioNeg=acumuladorNeg/contadorNeg;

	dif=contadorPosit-contadorNeg;
	if (dif>0){
		msg="hay mas n positivos"+ dif;
	}
	else if (dif==0){
		msg="misma cantidad";
	}
	else {
		msg="hay mas negativos"+(dif*-1);
	}



	respuesta=prompt("ingrese respuesta");
	document.write(msg);
	document.write(promedioPosit);
	//poner todas las variables
	//separar con <br>
	




}
}//FIN DE LA FUNCIÓN