function mostrar()
{
	//acumulador=1;

	var contador=0;
	var positivo=0;
	var num;
	var negativo=1;
	
	var respuesta='si';

	while (respuesta=="si"){

		contador++;

		num=prompt("ingrese sus números");
		num=parseInt(num);

    if (num>=0){
		positivo+=num;
	}

	else {
		negativo*=num;


	}
	respuesta=prompt("ingrese respuesta");


		

	}





document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN