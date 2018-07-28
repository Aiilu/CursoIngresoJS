function mostrar()
{
    var prec;
    var desc;
    var precTot;

    prec=parseInt(prompt("Ingrese precio"));
    desc=parseInt(prompt("Ingrese porcentaje de descuento"));

    precTot=prec*(desc/100);

    document.getElementById("elPrecioFinal").value=precTot;

}
