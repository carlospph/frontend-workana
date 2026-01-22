const inputEmail = document.querySelector("#inputEmail");
const inputSenha = document.querySelector("#inputSenha");
const btnLogin = document.querySelector("#btnLogin");
 
function validateDatas(e) {
    e.preventDefault();  

    if (inputEmail.value === "" || inputSenha.value === "") {
        alert("Campos obrigatórios!");
    } else {
        alert("Pronto para logar");
    }
}

btnLogin.addEventListener("click", validateDatas);