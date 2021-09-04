//Obtener elemento por ID
const titulo = document.getElementById('perro');

// Obtener elemento por nombre de etiqueta
const subtitulo = document.getElementsByTagName('h2');

// Obtener elemento por clase
const parrafo = document.getElementsByClassName('parrafo');

const elemento = document.querySelector('#tilin');

const imagen = document.querySelector('#img');

const body = document.body;

const nombre = document.querySelector('#nombre');

nombre.addEventListener('mouseenter', ()=>{
  nombre.style.fontSize = '35px';
  nombre.style.color = 'blue';

});


const agregarBg = () =>{
  body.classList.add('bg2')
}

const quitarBg = () =>{
  body.classList.remove('bg2')
}


const cambiarImagen = () =>{
  imagen.src = "../src/messi.jpg";
  titulo.innerHTML = "Imagen de Messi cambiada";
}


subtitulo[1].innerHTML = "Tilín Tilín";
parrafo[3].innerHTML = "Fui modificado en js"


