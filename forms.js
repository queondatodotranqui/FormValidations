
var formulario = document.getElementById('form');

var nombre = document.getElementById('nombre');
var edad = document.getElementById('edad');
var email = document.getElementById('email');
var ciudad = document.getElementById('ciudad');
var codigo = document.getElementById('codigo');
var celular = document.getElementById('celular');



formulario.addEventListener('submit', (e)=>{

    console.log('formulario enviado');
    e.preventDefault();

    if(validarCampos()){

    }

})

function checkEmail(email){
    var reg = /@./;
    return reg.test(email);
}

edad.addEventListener('keypress', (e)=>{
    var caracter = e.charCode || e.keyCode;
    if ((caracter < 48 || caracter > 57 ) || e.target.value.length > 1){
        e.preventDefault();
    }
})

function validarCampos(){
    var valido = true;

    nombre.classList.remove('is-invalid', 'is-valid');
    edad.classList.remove('is-invalid', 'is-valid');
    email.classList.remove('is-invalid', 'is-valid');
    ciudad.classList.remove('is-invalid', 'is-valid');
    codigo.classList.remove('is-invalid', 'is-valid');
    celular.classList.remove('is-invalid', 'is-valid');

    if(nombre.value == ''){
        nombre.classList.add('is-invalid');
        valido = false;
    }else {
        nombre.classList.add('is-valid');
    }

    if(edad.value == ''){
        edad.classList.add('is-invalid');
        valido = false;
    }else{
        edad.classList.add('is-valid');
    }

    if(email.value == '' && (!checkEmail(email.value))){
        email.classList.add('is-invalid');
        valido = false;
    }else{
        email.classList.add('is-valid');
    }

    if(ciudad.value ==''){
        ciudad.classList.add('is-invalid');
        valido = false;
    }else{
        ciudad.classList.add('is-valid');
    }

    if(codigo.value ==''){
        codigo.classList.add('is-invalid');
        valido = false;
    }else{
        codigo.classList.add('is-valid');
    }

    if(celular.value ==''){
        celular.classList.add('is-invalid');
        valido = false;
    }else{
        celular.classList.add('is-valid');
    }
    return valido;
}