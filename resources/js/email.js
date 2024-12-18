
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('createUserForm');
    const emailInput = form.querySelector('input[name="email"]');
    
    form.addEventListener('submit', function (event) {
      // Regex para validar email
      const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
      
      if (!emailRegex.test(emailInput.value)) {
        event.preventDefault(); // Impede o envio do formulário
        alert('Por favor, insira um email válido.');
        emailInput.focus();
      }
    });
  });
