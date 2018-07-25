function mostrar()
{
    var max;
	var min;
	var cont=0;
	var num;
	var bandera=true;
	// declarar variables
	// if(bandera) ... va a dar true
	//bandera=false;
	//maximo=num;
	//min=num;
	
	var respuesta='si';

	while(respuesta=="si")
	{
		num=prompt("Ingrese un numero");
		num=parseInt(num);
		cont ++;

		
		if (bandera){
		 bandera=false;
		 max=num;
		 min=num;

	 }

	 if (num>max){
         max=num;
	 }

	 if (num<min){
		 min=num;
	 }

	 respuesta=prompt("¿Quiere seguir ingresando?");
		
	
	}
document.getElementById('maximo').value=max;
document.getElementById('minimo').value=min;



}//FIN DE LA FUNCIÓN