const loginForm = document.getElementById('login-form');
const loginButton = document.getElementById('login-btn');
const responseLogin = document.getElementById('login-response');
  
  
  // Добавляем обработчик события на кнопку регистрации
  loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('email-log').value;
    const password = document.getElementById('password-log').value;
  
    const userData = {
      email,
      password
    };
  
    // Отправляем запрос на сервер
    fetch("https://127.0.0.1:9000/sessions", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    })
    .then((response) =>
    {
      if (response.ok){
        console.log('ok')
        window.location.href= "../main/main.html"
      }
      else{
        console.log('error')
      }
      return response.json()
    })
    .then((data) => {
      console.log(data)
    })
    .catch(error => {
      console.error(error);
    });
  });
  