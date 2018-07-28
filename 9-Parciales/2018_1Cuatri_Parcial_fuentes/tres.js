function mostrar()
{
    var precio;
    var porcentajeDescuento;
    var descuentoEnDinero;
    var iva;
    var precioFinal;

    precio=prompt("ingrese el precio");
    porcentajeDescuento=prompt("ingrese el porcentaje");
    precio=parseInt(precio);
    porcentajeDescuent=parseInt(porcentajeDescuento);

    descuentoEnDinero=precio*descuentoEnDinero/100;
    iva=precio*21/100;
    precioConDescuento=precio-descuentoEnDinero;
    precioFinal=(precio-porcentajeDescuento)+iva;
    document.getElementById("elPrecioFinal").value=precioFinal;
}
