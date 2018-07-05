/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var importe;
    var porcentaje;
    var resultado;
    importe=document.getElementById("importe").value;
    porcentaje=0.25;
    resultado=importe-(importe*porcentaje);
    document.getElementById("resultado").value=resultado;

            
	
}
