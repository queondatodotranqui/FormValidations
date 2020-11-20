
var btn = document.getElementById('submit');

var nombre = document.getElementById('nombre');
var edad = document.getElementById('edad');
var email = document.getElementById('email');
var ciudad = document.getElementById('ciudad');
var codigo = document.getElementById('codigo');
var celular = document.getElementById('celular');

function checkEmail(email){
    var regEx = new regEx(/@/);
    if (email.match(regEx) == -1){
        return false;
    }else{
        return true;
    }
}

function validarCampos(){
    var valido = true;

    if(nombre.value == ''){
        nombre.classList.add('is-invalid');
        valido = false;
    }
    if(edad.value == '' && edad.value.length > 2){
        edad.classList.add('is-invalid');
        valido = false;
    }
    if(email.value == '' && checkEmail(email.value)){
        email.classList.add('is-invalid');
        valido = false;
    }
}