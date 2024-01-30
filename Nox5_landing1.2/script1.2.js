const loginContainer = document.querySelector(".login-container[type='login-box']");
const passwordContainer = document.querySelector(".login-container[type='password-box']");
const toggleButton = document.getElementById("toggleButton");
const backButton = document.getElementById("backButton");
const errorText = document.getElementById("error");
const usernameInput = document.getElementById("username");

document.getElementById("passwordForm").toggleButton.addEventListener("click", function(event) {
  event.preventDefault();
    // Verifique se o valor do input corresponde a um domínio válido
    const usernameValue = usernameInput.value;
    const validDomains = ["@hotmail.com", "@live.com", "@outlook.com"];
    const isValid = validDomains.some(domain => usernameValue.includes(domain));

    if (!username == isValid) {
        // Exiba a mensagem de erro acima do login-box
        errorText.style.display = "block";
        usernameInput.classList.add("error-input");
        return; // Não prossiga se não for válido
    }
});
 toggleButton.addEventListener("click", () => {
 
   loginContainer.style.display = "none";
   passwordContainer.style.display = "flex";
   const username = document.getElementById("username").value;
   const usernamePlaceholder = document.getElementById("usernamePlaceholder");
   usernamePlaceholder.textContent = `${username}`;
 });

  backButton.addEventListener("click", () => {

     loginContainer.style.display = "flex";
     passwordContainer.style.display = "none";
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