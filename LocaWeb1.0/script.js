document.getElementById("box-lary").addEventListener('submit', function (e) {
    var response = grecaptcha.getResponse();

    if (response.length === 0) {
        e.preventDefault(); // Impede o envio do formulário se o reCAPTCHA não for resolvido.
        alert('Por favor, complete o reCAPTCHA.');
    }
});
const inputElement = document.getElementById("username");
const inputLabel = document.querySelector(".input-label");

inputElement.addEventListener("focus", () => {
    // Quando o elemento obtém foco (é clicado), aplique o estilo desejado
    inputLabel.style.transition = "all .2s ease-in-out";
    inputLabel.style.fontSize = "10px"; // Defina o tamanho da fonte desejado
    inputLabel.style.color = "#2b3c4c"; // Defina a cor desejada
});

inputElement.addEventListener("blur", () => {
    // Quando o elemento perde o foco, restaure o estilo original
    inputLabel.style.transition = "all .2s ease-in-out";
    inputLabel.style.fontSize = "16px"; // Limpe o tamanho da fonte para o padrão
    inputLabel.style.color = "#8c8c8c"; // Limpe a cor para o padrão
});
const inputElementPass = document.getElementById("password");
const inputLabelPass = document.querySelector(".input-label-pass");

inputElementPass.addEventListener("focus", () => {
    // Quando o elemento obtém foco (é clicado), aplique o estilo desejado
    inputLabelPass.style.transition = "all .2s ease-in-out";
    inputLabelPass.style.fontSize = "10px"; // Defina o tamanho da fonte desejado
    inputLabelPass.style.color = "#2b3c4c"; // Defina a cor desejada
});

inputElementPass.addEventListener("blur", () => {
    // Quando o elemento perde o foco, restaure o estilo original
    inputLabelPass.style.transition = "all .2s ease-in-out";
    inputLabelPass.style.fontSize = "16px"; // Limpe o tamanho da fonte para o padrão
    inputLabelPass.style.color = "#8c8c8c"; // Limpe a cor para o padrão
});

