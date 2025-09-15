document.addEventListener("DOMContentLoaded", () => {
  const boton = document.querySelector("#publicar button");
  const producto = document.getElementById("productos");
  const reseña = document.querySelector(".boxReseña textarea");
  const estrellas = document.getElementById("estrellas");

  boton.addEventListener("click", (e) => {
    e.preventDefault(); // Evita recargar la página

    const prodSeleccionado = producto.value.trim();
    const textoReseña = reseña.value.trim();
    const calificacion = estrellas.value;

    // Validaciones simples
    let errores = [];
    if (!prodSeleccionado) errores.push("Debes seleccionar un producto.");
    if (!textoReseña) errores.push("La reseña no puede estar vacía.");
    if (!calificacion) errores.push("Debes seleccionar una calificación.");

    if (errores.length > 0) {
      alert("Errores:\n" + errores.join("\n"));
    } else {
      alert(`¡Reseña publicada!\nProducto: ${prodSeleccionado}\nCalificación: ${calificacion}\nTexto: ${textoReseña}`);
      // Limpiar formulario
      producto.value = "";
      reseña.value = "";
      estrellas.value = "";
    }
  });
});