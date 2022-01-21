let dia = prompt("Ingrese un dia a la semana").toLowerCase;

if (
  dia === "lunes" ||
  dia === "martes" ||
  dia === "miercoles" ||
  dia === "jueves" ||
  dia === "viernes"
) {
  alert("enntre semana");
} else {
  if (dia === "sabado" || dia === "domingo") {
    alert("fin de semana");
  } else {
    alert("favor ingresar solo dias de la semana");
  }
}
