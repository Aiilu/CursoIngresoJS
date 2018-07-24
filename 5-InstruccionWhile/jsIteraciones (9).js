function mostrar()
{
    var maximo;
	var minimo;
	var contador=0;
	var num;
	var bandera=true;
	// declarar variables
	// if(bandera) ... va a dar true
	//bandera=false;
	//maximo=num;
	//min=num;
	
	var respuesta='si';

	while(respuesta!='no')
	{
		num=prompt("Ingrese un numero");
		num=parseInt(num);
		contador ++;

		
		if (bandera){
		 bandera=false;
		 maximo=num;
		 min=num;

	 }

	 if (num>maximo){
         maximo=num;
	 }

	 if (num<minimo){
		 minimo=num;
	 }

	 respuesta=prompt("¿Quiere seguir");
		
	
	}
document.getElementById('maximo').value=maximo;
document.getElementById('minimo').value=minimo;



}//FIN DE LA FUNCIÓN