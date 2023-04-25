function concatenar() {
  const input = document.getElementById("numero");
  const numero = input.value.trim().replace(/\s+/g, ''); // elimina espacios en blanco
  input.value = numero; // actualiza el valor del input

  // verifica que el número solo contenga dígitos
  const regex = /^\d+$/;
  if (!regex.test(numero)) {
    alert("Ingrese solo números pegados sin espacios.");
    return;
  }

  const url = `https://www.farmatodo.com.ve/producto/${numero}`;
  window.open(url);
  input.value = "";
}

document.addEventListener("DOMContentLoaded", function() {
  const input = document.getElementById("numero");
  input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      const touchEvent = new TouchEvent("touchstart");
      document.querySelector(".boton").dispatchEvent(touchEvent);
    }
  });
});
