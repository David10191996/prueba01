/**
 * 1 - Por medio de un Boton pedimos al usuario el nombre
 * 2 - usando prompt pedimos datos: edad,direccion,documento, telefono
 * 3 - en un alert cocatenado el siguiente mensaje
 * Hola+ nombre + tu edad es: + edad + tu direccon es: + direccion + tu numero telefonico es: telefono + y tu numero de documento es + documento
 */

function nombreUsuario() {
  let nombre = prompt("Digite su nombre");
  let edad = prompt("Digite su edad");
  let direccion = prompt("Didigite su direccion residencial");
  let documento = prompt("Digite su documento de identidad");
  let telefono = prompt("Digite su numero de telefono celular");

  alert(
    "Hola " +
      nombre +
      "\n" +
      "Tu numero de documento de identidad es: " +
      documento +
      "\n" +
      "Tu edad es: " +
      edad +
      "\n" +
      "tu direccion es: " +
      direccion +
      "\n" +
      "Tu numero celular es: " +
      telefono
  );
}
nombreUsuario();
