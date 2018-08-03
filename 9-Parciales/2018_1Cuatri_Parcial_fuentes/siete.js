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

 /*var nombre;
     var edad;
     var sexo;
     var cont=0;
     var cant_muj=0;
     var cant_hom=0;
     var cant_may_ed=0;
     var cant_men_ed=0;
     var cant_hombres_may_edad=0;
     var max;
     var min;
     var prom_muj;
     var prom_hom;
     var prom_total;
     var acum_hom=0;
     var acum_muj=0;
     var nombremax;
     var nombremin;
     var sexmax;
     var nombrevieja;
    for(cont=0;cont<4;cont++)
    {
       nombre=prompt("ingrese nombre");
       sexo=prompt("ingrese sexo");
    sexo=sexo.toLowerCase()
       while(sexo!="f" && sexo!= "m")
        {
        sexo=prompt("vuelva a ingresar sexo valido");
        sexo=sexo.toLowerCase()
        }
       
        edad=prompt("ingrese edad");
        edad = parseInt(edad);
       while( edad<0||edad>100 || isNaN(edad))
        {
           edad=prompt("vuelva ingrese edad");
           edad = parseInt(edad);
           cont++
        }
       if(sexo=="f")
        {
            cant_muj++
            acum_muj=acum_muj+edad;
        }
          else
        {
             cant_hom++
             acum_hom=acum_hom+edad;
             if(edad>18)
            {
                cant_hombres_may_edad++
            }
        }
        if(edad>18)
        {
             cant_may_ed++
        }
        else
        {
             cant_men_ed++
        }
        if( cont==0)
        {
             min=edad;
             max=edad;
        }
        if(edad>max)
        { 
          max=edad;
          nombremax=nombre; 
          sexmax=sexo;
        if(sexo=="f")
         {
           nombrevieja=nombre;
         }
        }
        if(edad<min)
        { 
          min=edad;
          nombremin=nombre;
        }
    }
prom_muj= acum_muj/cant_muj;
prom_hom= acum_hom/cant_hom;
prom_total=(acum_muj+acum_hom)/cont;
document.write("Cantidad de mujeres: " + cant_muj + "<br>");
document.write("Cantidad de hombres: " + cant_hom + "<br>");
document.write("Cantidad de mayores de edad: " + cant_may_ed + "<br>");
document.write("Cantidad de menores de edad: " + cant_men_ed + "<br>");
document.write("Cantidad de menores de edad: " + cant_hombres_may_edad + "<br>");
document.write("La edad mas baja: " + min + "<br>");
document.write("La edad mas alta: " + max + "<br>");
document.write("promedio de edad de mujeres: " + prom_muj + "<br>");
document.write("promedio de edad de hombres: " + prom_hom + "<br>");
document.write("promedio total: " + prom_total + "<br>");
document.write("nombre del mas viejo: " + nombremax + "<br>");
document.write("nombre del mas joven: " + nombremin + "<br>");
document.write("sexo del mas viejo: " + sexmax + "<br>");
document.write("nombre de la mujer mas vieja: " + nombrevieja + "<br>");*/
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  





