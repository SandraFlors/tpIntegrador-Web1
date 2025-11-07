console.log("Enlazado a js-validacion");
//    ■ Al menos 3 campos. Debe tener mail y teléfono (Deben tener 
//expresiones regulares). Combinar validaciones de campos 
//obligatorios, longitud máxima y uso de expresiones regulares. 
//   ■ Los datos enviados deben ser validados vía javascript (no basta con 
//HTML5) y en caso de estar bien, se debe agregar html a la página 
//mostrando los datos enviados (usando createElement). 
//    ■ En caso de haber errores, deben ser mostrados manipulando el HTML (no usar alertas nativas).

function recarga(event) {
  event.preventDefault();

  const username = document.getElementById("username");
  const telefono = document.getElementById("telefono");
  const email = document.getElementById("email");
  const mensaje = document.getElementById("mensaje");

  for (const e of document.querySelectorAll(".error")) e.remove();
  const mensajeViejo = document.getElementById("mensaje-usuario");
  if (mensajeViejo) mensajeViejo.remove();

  let valid = true;

  // Validación usuario
  if (username.value === "" || username.value.length < 10 || username.value.length > 20) {
    const error = document.createElement("div");
    error.className = "error";
    error.textContent = "El nombre debe tener entre 10 y 20 caracteres.";
    error.style.color = "red";
    username.parentNode.appendChild(error);
    valid = false;
  }

  // Validación teléfono
  const telefonoRegex = /^[0-9]{10,10}$/;
  if (telefono.value === "" || !telefonoRegex.test(telefono.value)) {
    const error = document.createElement("div");
    error.className = "error";
    error.textContent = "Formato de teléfono inválido (solo números y no mas de 10 caracteres).";
    error.style.color = "red";
    telefono.parentElement.appendChild(error);
    valid = false;
  }

  // Validación email
  const emailRegex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
  if (email.value === "" || !emailRegex.test(email.value)) {
    const error = document.createElement("div");
    error.className = "error";
    error.textContent = "Correo formato inválido.";
    error.style.color = "red";
    email.parentNode.appendChild(error);
    valid = false;
  }

  // Validación mensaje
  if (mensaje.value === "") {
    const error = document.createElement("div");
    error.className = "error";
    error.textContent = "Debe ingresar un mensaje.";
    error.style.color = "red";
    mensaje.parentElement.appendChild(error);
    valid = false;
  }

  // Mostrar mensaje si todo es válido
 if (valid) {
  const mensajeFinal = document.createElement("p");
  mensajeFinal.textContent = `Usuario ${username.value} con email ${email.value} ¡Hemos recibido tu msj ! Pronto estaremos en contacto contigo.`;
  mensajeFinal.id = "mensaje-usuario";
  document.getElementById("mensaje-final").innerHTML = "";
  document.getElementById("mensaje-final").appendChild(mensajeFinal);
}
}