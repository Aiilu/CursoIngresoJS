function mostrar()
{
    var cont=0;
    var nomb;
    var sexo;
     var edad;
     var mujeres=0
     var hombres=0;
     var cantMayor=0;
     var cantMenor=0;
     var cantMayHom=0
     var flag=true;
      var max=0;
      var min=101;
      var promedioMuj;
      var promedioHomb;
      var promedio;
      var acumMuj=0;
      var acumHomb=0;
      

     while (cont<4)
     { 
    nomb=prompt("Ingrese nombre");

    edad=prompt("Ingrese edad");
    edad=parseInt(edad);

    while (edad <0 || edad>100 )
    {
        edad = prompt("vuelva a Ingrese su edad");
        edad= parseInt(edad);
    }

        sexo= prompt("Ingrese su sexo. F o M");
    while (sexo !=="M" && sexo !=="F")
    {
        sexo= prompt("Ingrese su sexo nuevamente");

 }

 if (sexo=="F"){
     mujeres ++;
     acumMuj ++;

 }
 else {
     hombres ++;
     acumHomb ++;
     if(edad>17){
         cantMayHom ++;
     }
 }

 if (edad>17){
     cantMayor ++ ;
 }
 else {
     cantMenor ++;
 }

 if (flag=false){
     max= edad;
     min = edad;

     if (edad>max){
         max=edad; //uuando sacas el maximo tam el nombre
     }
     if (edad<min){
         min=edad;
     }
     cont ++;


 }

 promedioMuj=cont/acumMuj;
 promedioHomb=cont/acumHomb;

    document.write(" Cant Mujeres:" + mujeres + "<br>");
    document.write(" Cant Hombres" + hombres + "<br>");
    document.write("Cant Mayor" + cantMayor + "<br>");
    document.write("Cant Menores" + cantMenor + "<br>");
    document.write("Cant hombres mayores" + cantMayHomb + "<br>");
    document.write("Maximo" + max + "<br>");
    document.write("Minimo" + min + "<br>");
    document.wrie("Promedio mujeres" + promedioMuj + "<br>");
    documen.write("Promedio hombres" + promedioHomb + "<br>");
}
}
