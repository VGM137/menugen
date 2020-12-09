let guisado = document.getElementById('guisado')
let addFood = document.getElementById('addFood')
let addDate = document.getElementById('addDate')
let date = document.getElementById('date')
let fecha = document.getElementById('fecha')
let download = document.getElementById('download')

addDate.onclick = () => {
  if(date.value.length > 0){
    let fechaHoy = date.value
    let fechaAño1 = fechaHoy.charAt(0)
    let fechaAño2 = fechaHoy.charAt(1)
    let fechaAño3 = fechaHoy.charAt(2)
    let fechaAño4 = fechaHoy.charAt(3)
    let fechaMes1 = fechaHoy.charAt(5)
    let fechaMes2 = fechaHoy.charAt(6)
    let fechaDia1 = fechaHoy.charAt(8)
    let fechaDia2 = fechaHoy.charAt(9)
    let format = `${fechaDia1}${fechaDia2}/${fechaMes1}${fechaMes2}/${fechaAño1}${fechaAño2}${fechaAño3}${fechaAño4}`
    fecha.innerHTML = format
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
      quitar.innerHTML = 'x '
      escribir.appendChild(quitar)
      quitar.onclick = () => {
        quitar.parentElement.remove()
      }
  }
}

$(document).ready(function() {
  $(download).click(function() {
    domtoimage.toBlob(document.getElementById('menu')).then(function(blob) {
      window.saveAs(blob, 'output.jpg')
    })
  })
})
