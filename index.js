import domtoimage from '/bower_components/dom-to-image/src/dom-to-image.js';
/* var domtoimage = require('/bower_components/dom-to-image/dist/dom-to-image.min.js'); */

let guisado = document.getElementById('guisado')
let addFood = document.getElementById('addFood')
let addDate = document.getElementById('addDate')
let date = document.getElementById('date')
let fecha = document.getElementById('fecha')
let download = document.getElementById('download')

addDate.onclick = () => {
  if(date.value.length > 0){
    fecha.innerHTML = date.value
    hoy.innerHTML = 'HOY EN SAGAZ'
  }
}

addFood.onclick = () => {
  let texto = guisado.value
  if(texto.length > 0){
    let escribir = document.createElement('p')
      escribir.id = 'opcion'
      escribir.classList.add('opcion')
      escribir.innerHTML = texto
      guisados.appendChild(escribir)
      guisado.value = ''
    let quitar = document.createElement('button')
      quitar.id = 'quitar'
      quitar.classList.add('quitar')
      escribir.appendChild(quitar)
      quitar.onclick = () => {
        quitar.parentElement.remove()
      }
  }
}

download.onclick = () => {
  domtoimage.toJpeg(document.getElementById('menu'), { quality: 1 })
  .then(function (dataUrl) {
    var link = document.createElement('a');
    link.download = 'menu.jpeg';
    link.href = dataUrl;
    link.click();
  });
}