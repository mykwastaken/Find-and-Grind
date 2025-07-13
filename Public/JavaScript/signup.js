document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const age = document.getElementById('age').value;
  
    
    // Envia os dados para o servidor
    fetch(`http://localhost:3000/register?username=${username}&password=${password}&weight=${weight}&height=${height}&age=${age}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(response => {
      console.log(response)
      if (!response.ok) {
        throw new Error('Registration failed', response);
      }
      return response.json();
    })
    .then(data => {
      console.log('User registered successfully:', data);
      // Redireciona para a página de login ou outra página após o registro
      window.location.href = 'login.html';
    })
    .catch(error => {
      console.error('Error during registration:', error);
      // Lida com erros durante o registro
    });
  });
  