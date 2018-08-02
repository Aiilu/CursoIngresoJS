function mostrar()
{
//Jose M 25
//Maria F 16
//Jesus M 33
//Fer F 81

var cont=0;
var nota;
var sexo;
var promTotal;
var acumTotal=0;
var flag=true;
var max;
var min;
var masBajo;
var contVarones=0;


while (cont<5)
{
  cont ++;

  nota = prompt ("Ingrese una nota");
  nota = parseInt (nota);
  acumTotal+=nota;

  while ( nota<0 || nota>10 || isNaN(nota)) 
{
    nota = prompt ("Ingrese la nota nuevamente");
    nota = parseInt (nota);

}

    sexo = prompt ("Ingrese un sexo. F para femenino y M para masculino");
    sexo = sexo.toUpperCase();

    while (sexo !=="F" && sexo !=="M")
    {
        sexo = prompt ("Ingrese F o M");                            //VALIDACION
    }

     if (flag){
         flag = false;
        max  = nota;
        min = nota;
        masBajo = sexo;

   }

     if (nota>max){
         max = nota;
         if (sexo=="M" || nota>=6){
             contVarones ++;
         }
     }

     if (nota<min){
         min = nota;
         masBajo = sexo;       //b
     }

}

promTotal = acumTotal/cont;
alert("Hay tantos chicos aprobados:" + contVarones);
alert("La nota minima es:" + min + "y el sexo es:" + masBajo);
alert("El promedio total es:" + promTotal);                                                   
}


