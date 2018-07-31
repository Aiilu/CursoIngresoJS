function mostrar()
{
//Jose M 25
//Maria F 16
//Jesus M 33
//Fer F 81

var cont=0;
var nomb;
var sexo;
var sexoViej;
var edad;
var nombViej;
var nombJov;
var mujerVieja;
var cantMuj=0;
var cantHomb=0;
var cantMenEdad=0;
var cantMayEdad=0;
var cantHombMayEdad=0;
var flag=true;
var max=0
var min=0
var acumHob=0;
var acumMuj=0;
var acumTotal=0;
var promedioMujeres;
var promedioHombres;
var promedioTotal;

while (cont<4)
 {
     cont ++;

     nomb = prompt ("Ingrese su nombre");
     
     sexo = prompt ("Ingrese su sexo");
     sexo = sexo.toUpperCase();

     while (sexo!=="M" && sexo!=="F")
      {
          sexo = prompt ("Ingrese su sexo. F o M");
      }

     edad = prompt ("Ingrese su edad");
     edad = parseInt (edad);

     while (edad <0 || edad >100 || isNaN(edad))
      {
          edad = prompt ("Ingrese nuevamente su edad");
          edad = parseInt (edad);                          //verificacion
      }
      
     if (sexo=="F") {
         cantMuj ++; 
         acumMuj+=edad; //1
     }
      else  {
          cantHomb ++;
          acumHob+=edad;
          if (edad>18) {
              cantHombMayEdad ++;
          }                       //2,4.1
      }

      if (edad>18) {
          cantMayEdad ++;      //3
      }
      else  {
          cantMenEdad ++;      //4
      }

      if (flag) {
          flag = false;
          max = edad;
          min = edad;
      }

      if (edad>max) {
          max = edad; 
          nombViej = nomb;
          sexoViej = sexo; 
          mujerVieja = nomb;  //6,10,12,13
      }

      if (edad<min) {
          min = edad; 
          nombJov = nomb;    //5,11
      }
 }

 acumTotal = acumMuj+acumHob;

 promedioMujeres = acumMuj/cantMuj;   //7
 promedioHombres = acumHob/cantHomb;  //8
 promedioTotal = acumTotal/cont;      //9



 document.write("Cantidad de Mujeres:" + cantMuj + "<br>");
 document.write("Cantidad de Hombres:" + cantHomb + "<br>");
 document.write("Cantidad Mayores de Edad:" + cantMayEdad + "<br>");
 document.write("Cantidad Menores de Edad:" + cantMenEdad + "<br>");
 document.write("Cantidad de Hombres mayores de Edad:" + cantHombMayEdad + "<br>");
 document.write("La edad mas Baja:" + min + "<br>");
 document.write("La edad mas Alta:" + max + "<br>");
 document.write("Promedio de edad Mujeres:" + promedioMujeres + "<br>");
 document.write("Promedio de edad Hombres:" + promedioHombres + "<br>");
 document.write("Promedio de edad total:" + promedioTotal + "<br>");
 document.write("Nombre del mas Viejo:" + nombViej + "<br>");
 document.write("Nombre del mas Joven:" + nombJov + "<br>");
 document.write("Sexo del mas Viejo:" + sexoViej + "<br>");
 document.write("Nombre de la Mujer mas vieja:" + mujerVieja + "<br>");



}


