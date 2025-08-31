import { authenticate } from "./auth_utils";

document.getElementById("submit").addEventListener("click", async event => {
    const loginField = document.getElementById("login");
    const passwordField = document.getElementById("password");
    if(loginField.value != "" && passwordField.value != ""){
        const authResult = await authenticate(loginField.value, passwordField.value);
        if(authResult == true) window.location.href = "./toad_tips.html";
        else {
            loginField.value = "";
            passwordField.value = "";
            document.getElementById("loginError").style.display = "block";
        }
    }
});