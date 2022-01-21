//DOM
let ejecutar = document.getElementById("btnEjecutar");

const cambiarNombre = () => {
  let nombre = prompt("Ingrese nombre");
  alert("Tu nombre es: " + nombre);
};

//Eventos
ejecutar.onclick = function () {
  cambiarNombre();
};
