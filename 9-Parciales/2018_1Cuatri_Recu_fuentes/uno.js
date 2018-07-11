
function mostrar()
{
    var superficie;
    var perimetro;
    var base;
    var altura;

    base=prompt("ingrese la base"); 
    base=parseInt(base);
    altura=prompt("ingrese la altura");
    altura=parseInt(altura);
    
    perimetro=base*3;
    superficie=(base*altura)/2;

    alert("la base es "+base+"y la altura es "+altura);



}
