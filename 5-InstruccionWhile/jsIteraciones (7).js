function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var num;
	var promedio;

	while ( respuesta=="si" ){
		//no hace falta el num, cuenta el contador
		//while(true){
		//cont++;
		//num=prompt();
		//if(num=="no")ç
		//.....
		//prompt
		//num=parseInt(num);//NaN
		//while(isNaN(num))
	    // break
		num=prompt("ingrese sus números");
		contador ++;
		respuesta=prompt("desea seguir?");
		//aca podemos abrir un if 
		// if(rsp=="no"){
	    // break;(salir del bucle) Continue;(saltar al otro bloque de codigo).
        num=parseInt(num);
		acumulador+=num;
	}
	
 promedio=acumulador/contador;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN