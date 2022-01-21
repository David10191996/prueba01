// DOM
let ejecutar = document.getElementById("ingresarDatos");

let nombreUsuario = document.getElementById("nombreUsuario");
let edadUsuario = document.getElementById("edadUsuario");
let direccionUsuario = document.getElementById("direccionUsuario");
let telefonoUsuario = document.getElementById("telefonoUsuario");
let documentoUsuario = document.getElementById("documentoUsuario");

// Funcion para Cambiar Datos
const cambiarDatos = () => {
  let nombre = prompt("Ingrese nombre");
  let edad = prompt("Ingrese edad");
  let direccion = prompt("Ingrese direccion");
  let telefono = prompt("Ingrese telefono");
  let documento = prompt("Ingrese documento");

  nombreUsuario.innerHTML = "Nombre: " + nombre;
  edadUsuario.innerHTML = "Edad: " + edad;
  direccionUsuario.innerHTML = "Direccion: " + direccion;
  telefonoUsuario.innerHTML = "Telefono: " + telefono;
  documentoUsuario.innerHTML = "Documento: " + documento;

  localStorage.setItem("nombre", nombre);
  localStorage.setItem("edad", edad);
  localStorage.setItem("direccion", direccion);
  localStorage.setItem("telefono", telefono);
  localStorage.setItem("documento", nombre);
};

//Guardar informacion en localStorage
nombreUsuario.innerHTML = "Nombre: " + localStorage.getItem("nombre");
edadUsuario.innerHTML = "Edad: " + localStorage.getItem("edad");
direccionUsuario.innerHTML = "Direccion: " + localStorage.getItem("direccion");
telefonoUsuario.innerHTML = "Telefono: " + localStorage.getItem("telefono");
documentoUsuario.innerHTML = "Documento: " + localStorage.getItem("documento");

//Eventos
ejecutar.onclick = function () {
  cambiarDatos();
};
