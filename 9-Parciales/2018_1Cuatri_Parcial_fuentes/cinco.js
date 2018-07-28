function mostrar()
{
    var planeta;

    planeta=prompt("Ingrese un planeta");

    switch (planeta)
    {
    case "Mercurio":
    case "Venus":
          alert("Acá hace más calor");
    break;

    case "Tierra":
          alert("Acá vivimos");
    break;

    case "Marte":
    case "Jupiter":
    case "Saturno":
    case "Urano":
    case "Neptuno":
    case "Pluton":
          alert("Acá hace más frio");
    break;

    default:
            alert("No es un planeta válido");
     }

}
