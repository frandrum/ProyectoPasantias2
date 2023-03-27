

function concatenar() {
    const numero = document.getElementById("numero").value;
    const url = `https://www.farmatodo.com.ve/producto/${numero}`;
    window.open(url);
    document.getElementById("numero").value = "";
  }
