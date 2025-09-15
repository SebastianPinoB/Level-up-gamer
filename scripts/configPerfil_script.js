document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const payProcess = document.getElementById("payProcess");
  const detallesTarjeta = document.getElementById("detallesTarjeta");

  payProcess.addEventListener("change", () => {
    if (payProcess.value === "Tarjeta debito" || payProcess.value === "Tarjeta credito") {
      detallesTarjeta.style.display = "flex"; 
    } else {
      detallesTarjeta.style.display = "none";
    }
  });

  // Validación del formulario
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = document.getElementById("user").value.trim();
    const email = document.getElementById("email").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const metodoPago = payProcess.value;

    let errores = [];

    if (user.length < 3) {
      errores.push("El nombre de usuario debe tener al menos 3 caracteres.");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errores.push("El correo electrónico no es válido.");
    }

    if (direccion === "") {
      errores.push("La dirección no puede estar vacía.");
    }

    if (!metodoPago) {
      errores.push("Debe seleccionar un método de pago.");
    }

    if (metodoPago === "Tarjeta debito" || metodoPago === "Tarjeta credito") {
      const numTarjeta = document.getElementById("numTarjeta").value.trim();
      const fecha = document.getElementById("fecha").value.trim();
      const cvc = document.getElementById("cvc").value.trim();

      if (!numTarjeta || numTarjeta.length < 16) {
        errores.push("Número de tarjeta inválido (16 dígitos).");
      }
      if (!fecha) {
        errores.push("Debes ingresar la fecha de expiración.");
      }
      if (!cvc || cvc.length < 3) {
        errores.push("CVC inválido (3 dígitos).");
      }
    }

    if (errores.length > 0) {
      alert("Errores:\n" + errores.join("\n"));
    } else {
      alert("Datos guardados exitosamente");
    }
  });
});
