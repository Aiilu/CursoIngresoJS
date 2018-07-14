/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
contadorIntentos = 0;
var numeroUsuario;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );
<<<<<<< HEAD
  
    numeroSecreto = Math.floor( Math.random ()*(101-1)-1);
+    console.log(numeroSecreto);
=======
    numeroSecreto = Math.random ()*(101.1)+1;
    Console.log(4);
    contadorIntentos = 0;

	
>>>>>>> c5dff2f186eaf1f9df1d0cd74571e5e3b496b8f4

}

function verificar()
{
<<<<<<< HEAD
  numeroUsuario = document.getElementById("numero").value;
  numeroSecreto = 7;
  contadorIntentos = contadorIntentos + 1;
  document.getElementById("intentos").value = contadorIntentos;

  if (numeroUsuario == numeroSecreto){
    alert("Usted es un GANADOR, y solo en "+contadorIntentos+ " intentos");
  }
  else {
    if (numeroSecreto>numeroUsuario){
      alert("Falta poco para llegar al número");
    }
    else {
      if (numeroSecreto<numeroUsuario){
        alert("Te pasaste de largo");
      }
    }
  }


=======
  var numero;
  numero=document.getElementById("numero").value;
  contadorIntentos= contadorIntentos+1;
  document.getElementById("contadorIntentos").value=contadorIntentos;
  if (numero==numeroSecreto){
    alert ("ganaste");
  }
  else if (numero>4) {
  }
>>>>>>> c5dff2f186eaf1f9df1d0cd74571e5e3b496b8f4
	
	
}