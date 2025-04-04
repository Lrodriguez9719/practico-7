// Consigna #2: A través de un callback asociado al
// evento DOMContentLoaded de document, escribir en la
// consola el texto "Contenido del DOM cargado".

document.addEventListener("DOMContentLoaded", function() {
  console.log("Contenido del DOM cargado");
  const divDestino = document.getElementById("destino");

  // Consigna #3: Cargar desde JS el value del textarea con el siguiente contenido:
  // p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>
  const textAreaOrigen = document.getElementById("origen");
  textAreaOrigen.value = `<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>`;

  // Consigna #4: Cuando se dispare el evento input del textarea, obtener un HTMLCollection con todos
  // los <input> de la página y cambiar a false su propiedad disabled para que los mismos dejen de
  // estar deshabilitados. Hacer lo mismo con el botón que falta.
  textAreaOrigen.addEventListener("input", function() {
    const inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].disabled = false;
    }
    const botonMinusculas = document.querySelector("button");
    botonMinusculas.disabled = false;
  });

  // Consigna #5: Programar los 5 botones superiores para que cumplan estas funciones:
  // a) Botón "Reemplazar": reemplaza el contenido del div destino por el contenido del textarea origen.
  const botonReemplazar = document.getElementsByTagName("input")[0];
  botonReemplazar.addEventListener("click", function() {
    divDestino.innerHTML = textAreaOrigen.value;
  });

  // b) Botón "Agregar": agrega el contenido del textarea origen al contenido del div destino.
  const botonAgregar = document.getElementsByTagName("input")[1];
  botonAgregar.addEventListener("click", function() {
    divDestino.innerHTML += textAreaOrigen.value;
  });

  // c) Botón "Agregar 5 veces": agrega 5 veces el contenido del textarea origen al contenido del div destino.
  const botonAgregar5 = document.getElementsByTagName("input")[2];
  botonAgregar5.addEventListener("click", function() {
    for (let i = 0; i < 5; i++) {
      divDestino.innerHTML += textAreaOrigen.value;
    }
  });

  // d) Botón "Agregar 10 veces": agrega 10 veces el contenido del textarea origen al contenido del div destino.
  const botonAgregar10 = document.getElementsByTagName("input")[3];
  botonAgregar10.addEventListener("click", function() {
    for (let i = 0; i < 10; i++) {
      divDestino.innerHTML += textAreaOrigen.value;
    }
  });

  // e) Botón "Agregar n veces": agrega la cantidad de veces que indique el usuario
  // (a partir de un prompt) el contenido del textarea origen al contenido del div destino.
  const botonAgregarN = document.getElementsByTagName("input")[4];
  botonAgregarN.addEventListener("click", function() {
    const cantidad = prompt("¿Cuántas veces deseas agregar el contenido?");
    for (let i = 0; i < cantidad; i++) {
      divDestino.innerHTML += textAreaOrigen.value;
    }
  });

  // Consigna #6: Programar los 3 botones inferiores para que cumplan estas funciones:
  // a) Botón "Vaciar": vacía el contenido del div destino.
  const botonVaciar = document.getElementsByTagName("input")[5];
  botonVaciar.addEventListener("click", function() {
    divDestino.innerHTML = "";
  });

  // b) Botón "Convertir a mayúsculas": convierte en mayúsculas el contenido del div destino.
  const botonMayusculas = document.getElementsByTagName("input")[6];
  botonMayusculas.addEventListener("click", function() {
    divDestino.innerHTML = divDestino.innerHTML.toUpperCase();
  });

  // c) Botón "Convertir a minúsculas": convierte en minúsculas el contenido del div destino.
  const botonMinusculas = document.querySelector("button");
  botonMinusculas.addEventListener("click", function() {
    divDestino.innerHTML = divDestino.innerHTML.toLowerCase();
  });

  // Consigna #7: Una vez terminados los puntos anteriores, obtener un HTMLCollection con
  // todos los <li> de la página y agregar al inicio de su contenido el texto "[Ok] ".
  const lista = document.getElementsByTagName("li");
  for (let i = 0; i < lista.length; i++) {
    lista[i].innerHTML = "[Ok] " + lista[i].innerHTML;
  }
});

// Preguntas:
// 1. El contenido del textarea deberia mostrar las etiquetas HTML o el texto plano?
// Respuesta: Debería mostrar el texto plano, ya que el textarea no interpreta HTML.
// 2. El boton que falta es el que dice "Convertir a minusculas"?
// Respuesta: Sí, el botón que falta es el que dice "Convertir a minusculas".
// 3. La mayoria de los botones no tienen IDs para seleccionarlos individualmente,
// pero se pueden seleccionar por su posición en el HTML. Esto es correcto?
