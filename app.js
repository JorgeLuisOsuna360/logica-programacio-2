function convertir() {
    let valor = document.getElementById("celsius").value;
    let celsius = Number(valor);

    if (isNaN(celsius)) {
        alert("Error: Ingresa un número válido");
        return;
    }

    let fahrenheit = (celsius * 9 / 5) + 32;
    let kelvin = celsius + 273.15;

    document.getElementById("resultado").innerHTML =
        "Grados Kelvin: " + kelvin + "<br>" +
        "Grados Fahrenheit: " + fahrenheit;
}
