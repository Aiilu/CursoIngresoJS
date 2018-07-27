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

  edad=parseInt(edad);

    edad=prompt("Ingrese su edad");

  while (edad<18 || edad>90 ) {
    edad=prompt("Ingrese nuevamente su edad");
}
 document.getElementById("Edad").value=edad; //A
   
       sexo=prompt("Ingrese su sexo. F para femenino o M para masculino");

   while (!(sexo=="M" || sexo=="F")) {
       sexo=prompt("Sexo no identificado");
   }
   document.getElementById("Sexo").value=sexo; //B

        estCiv=prompt("Ingrese su Estado Civil. 1 para soltero/2 para casado/3 para divorciados/4 para viudos");
  
    switch(estCiv) {
       case "1":
       document.getElementById("EstadoCivil").value="Soltero";
       break;
       
       case "2":
       document.getElementById("EstadoCivil").value="Casado";
       break;

       case "3":
       document.getElementById("EstadoCivil").value="Divorciado";
       break;

       case "4":
       document.getElementById("EstadoCivil").value="Viudo";
       break;

       default:
          estCiv=prompt("Ingrese un estado valido");
   }
    document.getElementById("EstadoCivil").value=estCiv; //C

       sueldBrut=prompt("Ingrese su sueldo");
       sueldBrut=parseInt(sueldBrut);

    while (sueldBrut<1800) {
           sueldBrut=prompt("El salario no es correcto");
    }
    document.getElementById("Sueldo").value=sueldBrut; //D
 
        leg=prompt("Número de legajo, numérico de 4 cifras, sin ceros a la izquierda");

    while (leg<1000  || leg>9999) {
          leg=prompt("Ingrese su legajo nuevamente");
    }
    document.getElementById("Legajo").value=leg; //E

    switch(nacion) {
        case "A":
        document.getElementById("Nacionalidad").value="Argentino";
        break;

        case "E":
        document.getElementById("Nacionalidad").value="Extranjeros";
        break;

        case "N":
        document.getElementById("Nacionalidad").value="Nacionalizados";
        break;

        default:
              nacion=prompt("Ingrese una nacionalidad correcta");
            
    }
    document.getElementById("Nacionalidad").value=nacion; //F



}
