function mostrar()
{
    var cantnumpar=0
    num=prompt("ingrese numero ");
    num=parseInt(num);
    for(var num;num>1;num--)
    {
       if(num%2==0 && num!=0)
       {
            document.write("numeros pares : " + num + "<br>");
            cantnumpar++;
            
        }
      
        
    }

    document.write("cantidad de numeros pares: " + cantnumpar + "<br>");
    
}//FIN DE LA FUNCIÓN