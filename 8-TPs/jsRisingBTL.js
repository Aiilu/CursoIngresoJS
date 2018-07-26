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
 var est;
 var estSolt=1;
 var estCas=2;
 var estDiv=3;
 var estVi=4;
 var sueld;
 var leg;
 var nac;  
 
 if (!(edad>=18 && edad<=90)){    
  edad=prompt("Ingrese edad");
 }

 if (sexo=="M" && sexo=="F"){
  sexo=prompt("Ingrese sexo");
 }
 
 
 document.getElementById("Edad").value=edad;
 document.getElementById("Sexo").value=sexo;
 document.getElementById("EstadoCivil").value=est;
 document.getElementById("Sueldo").value=sueld;
 document.getElementById("Legajo").value=leg;
 document.getElementById("Nacionalidad").value=nac;
}
