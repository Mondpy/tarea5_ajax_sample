let number = 0; // índice del video actual
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");
const button = document.getElementById('btn');

function getData() {
  const request = new XMLHttpRequest();
  
  // Configura la solicitud
  request.open("GET", "ajax.json", true);
  request.responseType = "json";
  
  // Define lo que sucede cuando se recibe una respuesta
  request.onload = function() {
    if (request.status >= 200 && request.status < 300) {
      const data = request.response;
      
      // Actualiza el contenido con los datos recibidos
      titleArea.innerHTML = data[number].title;
      contentArea.innerHTML = data[number].content;
      videoArea.setAttribute("src", data[number].url);
      
      // Actualiza el índice para el siguiente clic
      number = (number + 1) % data.length;
    } else {
      console.error("Error en la solicitud:", request.statusText);
    }
  };
  
  request.onerror = function() {
    console.error("Error en la solicitud");
  };
  
  // Envía la solicitud
  request.send();
}

// Asocia la función getData al evento de clic del botón
button.addEventListener('click', getData);
