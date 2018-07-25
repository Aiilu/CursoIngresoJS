function mostrar()
{

	var cont=0;
	var num;
	var acum=0;
	var prom;

while (cont<5){
	//bucle 5 veces
	//sumar con parseint
	num=prompt("ingrese sus números");
    num=parseInt(num);

	//suma=suma+num;
	cont ++;
	acum+=num;
}
 prom=acum/cont;


document.getElementById('suma').value=acum;
document.getElementById('promedio').value=acum/5;

}//FIN DE LA FUNCIÓN