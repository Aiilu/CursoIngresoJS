/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var piedra;
var papel;
var tijera;
var edad;



function comenzar()
{ 
    eleccionMaquina = Math.floor( Math.random ()*(4-1))+1;
    console.log(eleccionMaquina)
  

    edad = prompt("Ingrese su edad");


    if (edad>=18){
    alert("usted es mayor de edad");
    }
    
    if (edad<18){
        alert("usted es menor de edad");
    }
     
    
	


}//FIN DE LA FUNCIÓN
function piedra()

{
    piedra = 1;
    console.log(piedra);

    if (piedra==eleccionMaquina){
        alert("El que tiene Piedra empató");
    }
    else if (piedra>eleccionMaquina){
        alert("El que tiene Piedra ganó");
    }
     else{
        alert("El que tiene Piedra perdió");
    }
    

   

   

}//FIN DE LA FUNCIÓN
function papel()
{
    papel = 2;
    console.log(papel);

    if (papel==eleccionMaquina){
        alert("El que tiene Papel empató");
    }
    else if (papel>eleccionMaquina){
        alert("El que tiene Papel ganó");
    } 
    else {
        alert("El que tiene Papel perdió");
    }
   
    


}//FIN DE LA FUNCIÓN
function tijera()
{   
    tijera = 3;
    console.log(tijera);

    if (tijera==eleccionMaquina){
        alert("El que tiene Tijera empató");
    }

    else if (tijera>eleccionMaquina){
        alert("El que tiene Tijera ganó");
    } 
    else {
        alert("El que tiene Tijera perdió");
    }
    
  


}//FIN DE LA FUNCIÓN
