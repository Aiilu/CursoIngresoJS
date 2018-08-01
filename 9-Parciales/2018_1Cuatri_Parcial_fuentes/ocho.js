function mostrar()
{
    var num;
    var letra;
    var cantCeros=0;
    var cantPares=0;
    var cantImpar=0;
    var acumPosit=0;
    var promedPosit=0;
    var acumNeg=0;
    


    for (cont=0; cont<1; cont ++)
    {

      letra = prompt ("Ingrese una letra");

      num = prompt ("Ingrese un numero");
      num = parseInt (num);


      if (num <-100 || num >100) {
          num = prompt ("Ingrese un numero");
          num = parseInt (num);                    //validacion
      }

      if (num == 0) {
          cantCeros ++;                             //c
    }

    else if (num % 2 == 0) {
        cantPares ++;                                //a
    }

    else {
        cantImpar ++;                                 //b
    }

    if (num >0 && num<100) {
        acumPosit ++;                                 //d
    }

    else  { 
        acumNeg ++;                                    //e
    }






}

promedPosit = acumPosit/cont;

document.write("Cantidad de Ceros:" + cantCeros + "<br>");
document.write("Cantidad de N° Pares:" + cantPares + "<br>");
document.write("Cantidad de N° Impares:" + cantImpar + "<br>");
document.write("Promedio N° Positivos:" + promedPosit + "<br>");
document.write("Suma de los negativos:" + acumNeg + "<br>" );

}
