function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);

switch (mesDelAño)
{
  case "Enero":
  case "Marzo":
  case "Mayo":
  case "Julio":
  case "Agosto":
        alert("Tiene 31 dìas");
  break;

  case "Abril":
  case "Junio":
  case "Septiembre":
  case "Noviembre":
  case "Diciembre":
        alert("Tiene 30 dìas");
  break;
  
  default:
          alert("Tiene 28 dìas");
}
	



}//FIN DE LA FUNCIÓN