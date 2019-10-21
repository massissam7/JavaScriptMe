var loginButton = document.getElementById('login-submit');
var registerButton = document.getElementById('register-submit');

loginButton.onclick = function (event) {
let form = document.getElementById('connexion-form'[0]);
let email = form[0].value;
let password = form[1].value;

}

registerButton.onclick = document.getElementById ('register-submit');
let form = document.getElementById('register-form');
let username = form[0].value;
let email = form[1].value;
let password = form[2].value;
let password_confirm = form[3].value;



function showAlert(messsage){}
alert(message);
}


checkUsername(username);{

    if (username.length < 5)
    return false;
    else 
    return true;
}