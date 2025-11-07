console.log("Enlazado a js-validacion");
//    ■ Al menos 3 campos. Debe tener mail y teléfono (Deben tener 
//expresiones regulares). Combinar validaciones de campos 
//obligatorios, longitud máxima y uso de expresiones regulares. 
//   ■ Los datos enviados deben ser validados vía javascript (no basta con 
//HTML5) y en caso de estar bien, se debe agregar html a la página 
//mostrando los datos enviados (usando createElement). 
//    ■ En caso de haber errores, deben ser mostrados manipulando el HTML (no usar alertas nativas).

const formulario=document.getElementById('formulario');


formulario.addEventListener('submit',(e) =>{ //realiza un evento
        e.preventDefault(); //al momento de enviar los datos no se envie a pagina eeronea

        validarUsuario();
    
});



function validarUsuario() {
    //capturamos los datos
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");
const mensaje = document.getElementById("mensaje");
    //expresiones regulares
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //expresion reg de email
    const regexTelefono = /^[0-10]{7,15}$/; //expresion reg de telefono

    
    if (nombre.length < 3) {
       alert("debe ingresar mas de 3 caracteres")
    }

    if (!regexEmail.test(email.value)) {

    }

    if (!regexTelefono.test(telefono)) {

    }

    if (mensaje.length < 5) {

    }

    return form;
}







