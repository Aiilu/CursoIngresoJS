/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
    var edad;
    var sexo;
    var estCiv;
    var sueldBrut;
    var leg;
    var nacion;

          edad=prompt("Ingrese su edad");

    while (edad<=18  || edad>=90) {
           edad=prompt("Ingrese otra vez");   //A
    }
    
           sexo=prompt("Ingrese su sexo. M para Masculino y F para Femenino");

    while (!(sexo=="M" || sexo=="F")) {
           sexo=prompt("Ingrese un sexo correcto"); //B
    }
    
           estCiv=prompt("Ingrese Estado Civil. 1 Soltero/2 Casado/3 Divorciado/4 Viudo");

    while (estCiv!=="1" && estCiv!=="2" && estCiv!=="3" && estCivil!=="4"){
           estCiv=prompt("Ingrese 1,2,3 o 4"); //C no me da
    }
           
           sueldBrut=prompt("Ingrese sueldo bruto");

    while (sueldBrut<8000) {
           sueldBrut=prompt("Ingrese nuevamente"); //D
    }
           leg=prompt("Ingrese su legajo");

    while (leg<1000 && leg>2000) {
           leg=prompt("Ingrese nuevamente su legajo"); //E 
  }
           leg=prompt("Ingrese su nacionalidad");
           
    while (nacion!=="A" && nacion!=="E" && nacion!=="N" ) {
           nacion=prompt("Ingrese una nacionalidad valida"); //F
    }

    document.getElementById("Edad").value=edad;
    document.getElementById("Sexo").value=sexo;
    document.getElementById("EstadoCivil").value=estCiv;
    document.getElementById("Sueldo").value=sueldBrut;
    document.getElementById("Legajo").value=leg;
    document.getElementById("Nacionalidad").value=nacion;
} 
