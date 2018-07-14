/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;
contadorIntentos = 0;
var numeroUsuario;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = Math.floor( Math.random ()*(101-1)-1);
	+    console.log(numeroSecreto);
	
}

function verificar()
{
	numeroUsuario = document.getElementById("numero").value;
  numeroSecreto = 10;
  contadorIntentos = contadorIntentos + 1;
  document.getElementById("intentos").value = contadorIntentos;

  if (numeroSecreto == numeroUsuario && contadorIntentos == 1){
	  alert("USTED ES PSÍQUICO");
  }
  else {
	  if (numeroSecreto == numeroUsuario && contadorIntentos == 2){
		  alert("¡Excelente percepción!");
	  }
	  else {
		  if (numeroSecreto == numeroUsuario && contadorIntentos == 3 ){
			  alert("Esto es suerte");
		  }
		  else {
			  if (numeroSecreto == numeroUsuario && contadorIntentos == 4){
				  alert("Excelente técnica");
			  }
			  else {
				  if (numeroSecreto == numeroUsuario && contadorIntentos == 5){
					  alert ("Usted esta en la media");
				  }
				  else {
					  if (numeroSecreto == numeroUsuario && contadorIntentos <= 10){
						  alert("Falta técnica");
						}
						else {
							if (numeroSecreto == numeroUsuario && contadorIntentos >11 ){
								alert("¡Afortunado en el amor!");
							}
						}
				  }
			  }
		  }
	  }
	
  }



	
	

}