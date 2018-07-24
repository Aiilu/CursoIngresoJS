function mostrar()
{

	var contador=0;
	var num;
	var suma=0;
	var promedio;


while (contador<5 ){
	//bucle 5 veces
	contador++;
	//sumar con parseint
	num=prompt("ingrese");

	num=parseInt(num);

	//suma=suma+num;
	suma+=num;
	

}
 promedio=suma/contador;




document.getElementById('suma').value=suma;
document.getElementById('promedio').value=suma/5;

}//FIN DE LA FUNCIÓN