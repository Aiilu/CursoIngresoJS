function mostrar()
{
    //no me da la letra maxima
    var letra;
    var num;
    var cont=0;
    var resp="si";
    var cantPar=0;
    var cantImpar=0;
    var cantCeros=0;
    var promPosit;
    var acumPosit=0;
    var acumNeg=0;
    var flag=true;
    var max;
    var min;
    var letraMax;
    var letraMin;

    while (resp=="si")
     {
       cont ++;

       letra = prompt ("Ingrese una letra");

       num = prompt ("Ingrese un numero");
       num = parseInt (num);

       while ( num<-100 || num>100 || isNaN(num))
        {
            num = prompt ("Ingrese un numero");
            num = parseInt (num);
        }
        
        resp = prompt ("Quiere continuar?");  //verificacion

        if (num%2==0 && num !=0) {
            cantPar ++;                                            //a
        }

        else if (num%2!=0 && num !=0) {
            cantImpar ++;                                          //b
     }

        else  {
            cantCeros ++;                                          //c
        }
        
        if (num>0) {
            acumPosit+=num;                                          //d
        }

        else {
             acumNeg+=num;                                            //e
        }

        if(flag) {

            flag = false;
            max = num;
            min = num;
            letraMax = letra;
            letraMin = letra;
        }
        
        if (num>max){
            max = num;
            letraMax = letra;
        }

        if (num<min) {
            min = num;
            letraMin = letra;
        }

        
        
    }

    promPosit = acumPosit/cont;

        document.write("Cantidad de N° Pares:" + cantPar + "<br>");
        document.write("Cantidad de N° Impares:" + cantImpar + "<br>");
        document.write("Cantidad de Ceros:" + cantCeros + "<br>");
        document.write("Promedio N° Positivos:" + promPosit + "<br>");
        document.write("Suma de N° Negativos:" + acumNeg + "<br>");
        document.write("N° Maximo: " + max + " y Letra Maxima: " + letraMax + "<br>");
        document.write("N° Minimo: " + min + " y Letra Minima: " + letraMin + "<br>");


    
    


    }


