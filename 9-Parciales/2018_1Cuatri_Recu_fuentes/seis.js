function mostrar()
{
    var nota;

    nota = prompt ("Ingrese una nota");

    switch (nota)
     {
         case "0":
         case "2":
         case "3":
               alert ("La proxima se puede!");
        break;

        case "4":
        case "5":
        case "6":
              alert ("Raspando");
        break;

        case "7":
        case "8":
        case "9":
        case "10":
              alert ("Aprobo!!!");
        break;

        default:
               alert ("Nota no válida");
    }

    if(nota>=8)
    {
        alert("muy bien");
    }
    else if(nota<=5)
    {
        alert("debes preocuparte mas ");
    }
    







     



}
