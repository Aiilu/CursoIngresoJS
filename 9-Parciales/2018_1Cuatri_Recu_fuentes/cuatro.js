function mostrar()
{
    var num1;
    var num2;
    var suma;
    var div;

    num1 = prompt("Ingrese un numero");
    num2 = prompt("Ingrese un numero");

    if (num1==num2) {
        alert (num1+num2);
    }

    else if (num1>num2) {
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        div = num1/num2;
        alert (" La división es " + div);
    }

    else {
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        suma = num1+num2;
        alert (" La suma es " + suma);
    }

    if (suma<50) {
        alert (" La suma es " + suma + " y es menor a 50");
    }



}
