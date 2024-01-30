const loginContainer = document.querySelector(".login-container[type='login-box']");
const passwordContainer = document.querySelector(".login-container[type='password-box']");
const toggleButton = document.getElementById("toggleButton");


 toggleButton.addEventListener("click", () => {
 
   loginContainer.style.display = "none";
   passwordContainer.style.display = "flex";

   const username = document.getElementById("username").value;
   const usernamePlaceholder = document.getElementById("usernamePlaceholder");
   usernamePlaceholder.textContent = `${username}`;
 });


   document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
        if (username === "usuario" && password === "senha") {
            alert("Login bem-sucedido!"); 
        } else {
            alert("Credenciais inválidas. Tente novamente.");
        }
    
    });