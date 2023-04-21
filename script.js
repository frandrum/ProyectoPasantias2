function concatenar() {
    const numero = document.getElementById("numero").value;
    const url = `https://www.farmatodo.com.ve/producto/${numero}`;
    window.open(url);
    document.getElementById("numero").value = "";
  }
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
  
  // verifica que solo se ingresen números y no espacios en blanco
  const input = document.getElementById("numero");
  let timeoutId;
  
  input.addEventListener("input", function (event) {
    clearTimeout(timeoutId);
    const value = event.target.value;
    const newValue = value.replace(/\s+/g, '');
    if (newValue !== value) {
      event.target.value = newValue;
    }
    timeoutId = setTimeout(function () {
      // desactivar el micrófono aquí
    }, 2000);
  });
  