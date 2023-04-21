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
  input.addEventListener("keypress", function (event) {
    const key = event.key;
    if (key !== "Enter" && key !== "Backspace" && key !== "Delete" && isNaN(key) || /\s/.test(key)) {
      event.preventDefault();
    }
  });
  