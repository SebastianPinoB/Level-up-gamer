let inputClave = document.querySelector('#password');
let inputVerClave = document.querySelector('#confirmPassword');
let btnFormulario = document.querySelector('#crearcuenta-btn');

function verificarIgualdadClaver(entrada1, entrada2) {
    if (entrada1.value === entrada2.value && entrada1.value) {
        console.log("Claves coinciden");
        $('#resultadoPdos').text(" Claves coinciden");
        $('#resultadoPdos').css("color", "green");
    } else {
        console.log("Ponla bien");
        $('#resultadoPdos').text("Las contraseñas no coinciden");
        $('#resultadoPdos').css({
                "color": "#ff4d4d",          
                "background-color": "#1a1a1a", 
                "padding": "5px",
                "border-radius": "5px"
            });
    }
}

btnFormulario.addEventListener('click', (e) => {
    e.preventDefault();
    verificarIgualdadClaver(inputClave, inputVerClave);
    validateEmail();
    validatePassword();
});

function validateEmailAddress(email) {
    var re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(email);
}

function validateEmail() {
    $("#resultadoE").text("");
    var emailaddress = $("#email").val();
    if (validateEmailAddress(emailaddress) && emailaddress.length <= 60) {
        $("#resultadoE").text(emailaddress + " es válido :)");
        $("#resultadoE").css("color", "green");
    } else {
        $("#resultadoE").text(emailaddress + " no es válido, utiliza un correo válido");
        $("#resultadoE").css({
                "color": "#ff4d4d",          
                "background-color": "#1a1a1a", 
                "padding": "5px",
                "border-radius": "5px"
            });
    }
    return false;
}

function validarPassword(password) {
    var er = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;
    return er.test(password);
}

function validatePassword() {
    $("#resultadoP").text("");
    var password = $("#password").val();
    if (validarPassword(password)) {
        $("#resultadoP").text("Contraseña válida :D");
        $("#resultadoP").css("color", "green");
    } else {
        $("#resultadoP").text("Debe tener al menos una mayúscula, una minúscula, un número y un caracter especial");
        $("#resultadoP").css({
                "color": "#ff4d4d",          
                "background-color": "#1a1a1a", 
                "padding": "5px",
                "border-radius": "5px"
            });
    }
    return false;
}

inputClave.addEventListener('input', () => {
    validatePassword();
});

inputVerClave.addEventListener('input', () => {
    verificarIgualdadClaver(inputClave, inputVerClave);
});
