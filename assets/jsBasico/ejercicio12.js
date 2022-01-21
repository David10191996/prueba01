let ingresarDatos = document.getElementById("btnEjecutar");
let nombreUsuario = document.getElementById("nombreUsuario");

const cambiarNombre = () => {
  let nombre = prompt("Ingrese nombre");
  nombreUsuario.innerHTML = "Bienvenido/a " + nombre;
};

//Eventos
ejecutar.onclick = function () {
  cambiarNombre();
};
