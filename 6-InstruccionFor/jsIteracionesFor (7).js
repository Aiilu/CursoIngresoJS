function mostrar()
{
    var cantDiv=0;

    num=prompt("ingrese un numero");
    num=parseInt(num);
    for(var num; num>1; num--)
    {
        if(num%1==0 & num !=0)
        {
            document.write("numeros divisores: " + num + "<br>");
            cantDiv ++;
        }
    }
    document.write("Cantidad de divisores:" + cantDiv + "<br>");




}//FIN DE LA FUNCIÓN