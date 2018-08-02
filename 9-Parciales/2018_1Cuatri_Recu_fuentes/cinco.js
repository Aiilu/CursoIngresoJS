function mostrar()
{
    var semana 

    semana =  prompt ("Ingrese dia de semana");

    switch (semana)
     {
         case "Sabado":
         case "Domingo":
               alert ("Buen finde!");
        break;

        case "Lunes":
        case "Martes":
        case "Miercoles":
        case "Jueves":
        case "Viernes":
              alert ("A trabajaar");
        break;

        default:
             alert ("No es un dia válido");
     }

}
