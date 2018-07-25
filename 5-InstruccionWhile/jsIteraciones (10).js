function mostrar()
{
	var num;
	var contPosit=0;
	var contNeg=0;
	var acumPosit=0;
	var acumNeg=0;
	var cantPosit;
	var cantNeg;
	var cantCeros=0;
	var cantPar=0;
	var promPosit;
	var promNeg;
	var dif;
	var msg;

	//declarar contadores y variables 
	var respuesta="si";

	while(respuesta=="si"){

	num=prompt("Ingrese sus números");
	num=parseInt(num);
	respuesta= prompt("Quiere seguir ingresando?");

	while(isNaN(num)){
	num=prompt("Ingrese sus números");
	num=parseInt(num);
	respuesta= prompt("Quiere seguir ingresando?");
	//isNan va a dar por entendido que es un num entero, si pongo un striing no va a producise el bloque
	}

	if(num<0){
	acumNeg+=num;
	contNeg ++;
	}

	else if (num>0){
	acumPosit+=num;
	contPosit ++;
	}
	
	else {
	cantCeros ++;
	}

	if (num%2==0){
		cantPar ++;
	}
	}
	
	promNeg=acumNeg/contNeg;
	promPosit=acumPosit/contPosit;

	dif=contPosit-contNeg;

	if(dif<0) {
	msg="hay mas n° negativos por:" + (dif*-1);
	}

	else if (dif==0) {
		msg="hay mas cantidad de ceros";
	}

	else  {
		msg="hay mas n° positivos por:" + dif;
	}

	document.write("Suma de negativos:" + acumNeg + "<br>");
	document.write("Suma de positivos:" + acumPosit + "<br>");
	document.write("Cantidad de n° negativos:" + contNeg + "<br>");
	document.write("Cantidad de n° positivos:" + contPosit + "<br>");
	document.write("Cantidad de Ceros:" + cantCeros + "<br>");
	document.write("Cantidad de n° pares:" + cantPar + "<br>");
	document.write("Promedio de los n° negativos:" + promNeg + "<br>");
	document.write("Promedio de n° positivos:" + promPosit + "<br>");
	document.write(msg);
	

		

}//FIN DE LA FUNCIÓN