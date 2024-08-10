function emailValidation() {
    const form = document.getElementById('form');
    const emailField = form.email;
    const emailConfirmField = form.email_confirm;
    
    // Crear el mensaje de error
    const errorElement = document.createElement('p');
    errorElement.setAttribute('id', 'alert');
    errorElement.classList.add('alert');
    
    // Función para validar los correos electrónicos
    function validateEmails() {
      console.log('Validando correos electrónicos...'); // Debugging
      if (emailField.value !== emailConfirmField.value || emailConfirmField.value === "") {
        console.log('Correos electrónicos no coinciden o el campo de confirmación está vacío'); // Debugging
        // Mostrar el mensaje de error si no existe
        if (!document.getElementById('alert')) {
          errorElement.textContent = "Los correos electrónicos no coinciden";
          emailConfirmField.parentNode.insertBefore(errorElement, emailConfirmField.nextSibling);
        }
        
        // Aplicar el color de fondo al campo de confirmación
        emailConfirmField.classList.add('alert_bg');
      } else {
        console.log('Correos electrónicos coinciden'); // Debugging
        // Eliminar el mensaje de error si existe
        const alert = document.getElementById('alert');
        if (alert) {
          alert.parentNode.removeChild(alert);
        }
        
        // Quitar el color de fondo si los correos electrónicos coinciden
        emailConfirmField.classList.remove('alert_bg');
      }
    }
  
    // Agregar evento 'input' a ambos campos de correo electrónico
    emailField.addEventListener('input', validateEmails);
    emailConfirmField.addEventListener('input', validateEmails);
  }
  
  // Ejecutar la validación cuando la ventana cargue
  window.onload = emailValidation;