let guisado = document.getElementById('guisado')
let addFood = document.getElementById('addFood')
let addDate = document.getElementById('addDate')
let date = document.getElementById('date')
let fecha = document.getElementById('fecha')
let download = document.getElementById('download')
let estilos = '/index.css'
let menu = document.getElementById('menu')
let linkGo = document.getElementById('linkGo')

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

async function createImage() {
  const payload = { 
    html: document.getElementById('menu').outerHTML,
    css: "body { font-size: 2.2em; font-family: 'Finger Paint'; } .menu { width: 700px; height: 700px; background: rgb(60,60,60); background: radial-gradient(circle, rgba(60,60,60,1) 0%, rgba(0,0,0,1) 100%); display: flex; position: relative; } .container { margin: auto; width: 80%; display: block; } .encabezado-container { max-width: 90%; margin: 0 auto; } .encabezado{ color: white; display: flex; margin: auto; text-align: center; background-image: linear-gradient(to right, white 50%, rgba(255,255,255,0) 0%); background-position: bottom; background-size: 12px 3px; background-repeat: repeat-x; } .fecha{ display: flex; height: 1em; width: 40%; margin: 5px auto; text-align-last: justify; align-items: center; justify-content: center; } .hoy{ margin: 5px auto; margin-bottom: 15px; height: 1em; width: 100%; box-sizing: border-box; display: flex; align-items: center; justify-content: center; } .guisados{ width: auto; color: white; text-align: center; box-sizing: border-box; padding: 10px 0; } .quitar{ display: none; } .opcion{ width: 100%; display: flex; justify-content: center; margin: 25px auto; text-transform: uppercase; text-align: center; line-height: 1em; } .pie{ color: white; text-align: center; box-sizing: border-box; padding: 10px 0; background-image: linear-gradient(to right, white 50%, rgba(255,255,255,0) 0%); background-position: top; background-size: 12px 3px; background-repeat: repeat-x; } .pie-mensaje { height: 1em; box-sizing: border-box; margin: auto; align-items: center; justify-content: center; }", 
    google_fonts: 'Finger Paint'
  };

  let headers = { 
    auth: {
      username: '0699a817-edcb-4997-9cf1-4b00ae5f5289',
      password: 'c5cf4969-de5a-4587-ac59-533cc37cd6dd'
    },
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const response = await axios.post('https://hcti.io/v1/image', JSON.stringify(payload), headers);
    link.innerHTML = `<a id="linkGo" class="linkGo" href=${response.data.url}>Guardar</a>`;
  } catch (error) {
    console.error(error);
  }
}


download.onclick = () => {
  createImage();
}


// Define your HTML/CSS

// Create an image by sending a POST to the API.
// Retrieve your api_id and api_key from the Dashboard. https://htmlcsstoimage.com/dashboard

