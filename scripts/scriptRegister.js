let inputClave = document.querySelector('#password');
let inputVerClave = document.querySelector('#confirmPassword');
let btnFormulario = document.querySelector('#crearcuenta-btn');

function verificarIgualdadClaver(entrada1, entrada2) {
    if (entrada1.value === entrada2.value && entrada1.value) {
        console.log("Claves coinciden");
        $('#resultadoPdos').text(" Claves coinciden");
        $('#resultadoPdos').css("color", "green");
        return true;
    } else {
        console.log("No ta bien");
        $('#resultadoPdos').text("Las contraseñas no coinciden");
        $('#resultadoPdos').css({
                "color": "#ff4d4d",          
                "background-color": "#1a1a1a", 
                "padding": "5px",
                "border-radius": "5px"
            });
        return false;
    }
}

btnFormulario.addEventListener('click', (e) => {
    e.preventDefault();

    let emailValido = validateEmail();
    let passValido = validatePassword();
    let clavesIguales = verificarIgualdadClaver(inputClave, inputVerClave);

    if (emailValido && passValido && clavesIguales) {
        setTimeout(() => {
            window.location.href = "homelvlup.html";
        }, 100);
    }
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
        return true;
    } else {
        $("#resultadoE").text(emailaddress + " no es válido, utiliza un correo válido");
        $("#resultadoE").css({
                "color": "#ff4d4d",          
                "background-color": "#1a1a1a", 
                "padding": "5px",
                "border-radius": "5px"
            });
            return false;
    }
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
        return true;
    } else {
        $("#resultadoP").text("Debe tener al menos una mayúscula, una minúscula, un número y un caracter especial");
        $("#resultadoP").css({
                "color": "#ff4d4d",          
                "background-color": "#1a1a1a", 
                "padding": "5px",
                "border-radius": "5px"
            });
            return false;
    }
}

inputClave.addEventListener('input', () => {
    validatePassword();
});

inputVerClave.addEventListener('input', () => {
    verificarIgualdadClaver(inputClave, inputVerClave);
});
