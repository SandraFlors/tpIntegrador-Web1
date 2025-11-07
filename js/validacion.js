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
   

   const username = document.getElementById("username")
   const email = document.getElementById("email")
   const password= document.getElementById("password")
   const confirm = document.getElementById("confirm-password")
   const terms = document.getElementById ("terms")
 
for (const e of document.querySelectorAll(".error")) e.remove();
  const mensajeViejo = document.getElementById("mensaje-usuario");
  if (mensajeViejo) mensajeViejo.remove();

  let valid = true;


  if (username.value === "" || username.value.length < 10 || username.value.length > 20) {
    const error = document.createElement("div");
    error.className = "error";
    error.textContent = "nombre de usuario entre 10 y 20 caracterres";
    error.style.color = "red";
    username.parentNode.appendChild(error);
    valid = false;
  }
    

   
  const emailRegex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;

if (email.value === "" || !emailRegex.test(email.value)) {
  const error = document.createElement("div");
  error.className = "error";
  error.textContent = "Correo invalido";
  error.style.color = "red";
  email.parentNode.appendChild(error);
  valid = false;
}

if (password.value === "" || password.value.length <= 8) {
        const error = document.createElement("div");
        error.className = "error";
        error.textContent = "contraseña debe ser mayor a 8 caracteres";
        error.style.color = "red";
        password.parentNode.appendChild(error);
        valid = false;
      }
if (confirm.value === "" || confirm.value !== password.value) {
        const error = document.createElement("div");
        error.className = "error";
        error.textContent = "las contraseñas no coinciden";
        error.style.color = "red";
        confirm.parentNode.appendChild(error);
        valid = false;
      }
if (!terms.checked) {
        const error = document.createElement("div");
        error.className = "error";
        error.textContent = "acepte los terminos y condiciones";
        error.style.color = "red";
        terms.parentNode.appendChild(error);
        valid = false;
      }
if (valid) {
const mensaje = document.createElement("p");
mensaje.textContent = "Usuario ${username.value} con email ${email.value} creado con éxito!";
mensaje.id = "mensaje-usuario";
document.body.appendChild(mensaje);
}
}






