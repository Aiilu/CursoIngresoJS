function mostrar()
{

    //no me da la marca mas pesada y el promedio
    
    var marca;
    var peso;
    var acumPeso=0;
    var temp;
    var cont=0;
    var contTemp=0;
    var resp="si";
    var flag=true;
    var marcaPesada;
    var max;
    var min;
    var prod0=0;
    var prom;
    while (resp=="si")
     {

        marca = prompt ("Ingrese la marca");
        
        peso = prompt ("Ingrese el peso");
        peso = parseInt (peso);

        while (peso<1 || peso>100 || isNaN(peso))
         {
             peso = prompt ("Ingrese el peso");
             peso = parseInt (peso);
         }

         cont ++;
         acumPeso+=peso;

         temp = prompt ("Ingrese temperatura");
         temp = parseInt (temp);

         while (temp<-30 || temp>30 || isNaN(temp))
          {
               temp = prompt ("Ingrese temperatura");
               temp = parseInt (temp);
          }

          resp = prompt ("Quiere continuar ingresando?");                //verificacion

        
          if(temp%2==0 && temp!=0)
          {
             contTemp++                                 //a
          }

          if (flag) {
             
            flag = false;
            max = peso;
            min = peso;
          }

          if (peso>max) {                                   //d
            max = peso;
            marcaPesada = marca;                           //b
          }

          if (peso<min) {                                   //d
              min = peso;
          }
          
          if (temp<0) {
              prod0 ++;
          }                                                   //c

          
     
     }
     prom = acumPeso/cont;

     document.write("Temperaturas Pares: " + contTemp + "<br>");
     document.write("Marca del producto mas Pesado: " + marcaPesada + "<br>" );
     document.write("Cantidad de productos <0: " + prod0 + "<br>");
     document.write("Promedio total: " + prom + "<br>");
     document.write("Maximo: " + max + "Minimo: " + min + "<br>");

    



}
