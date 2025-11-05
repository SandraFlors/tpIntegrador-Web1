console.log("Enlazado a js-Carrusel")
// Array con imágenes de ciclismo 
const imagenes = ["ImagenesCycle/Carrusel1.jpeg", "ImagenesCycle/Carrusel2.jpeg", "ImagenesCycle/Carrusel3.jpeg", "ImagenesCycle/Carrusel4.jpeg"
  
];

let indice = 0;

// Obtener el elemento de la imagen
const img = document.getElementById("imagen");
img.src = imagenes[indice];

// Función para avanzar
function avanzar() {
  indice++;
  if (indice >= imagenes.length) {
    indice = 0; // vuelve al inicio
  }
  img.src = imagenes[indice];
}

// Función para retroceder
function retroceder() {
  indice--;
  if (indice < 0) {
    indice = imagenes.length - 1; // vuelve al final
  }
  img.src = imagenes[indice];
}
