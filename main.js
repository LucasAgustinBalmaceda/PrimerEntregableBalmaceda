function calcularTotal() {
    const cantidadLapices = parseInt(document.getElementById("cantidad_lapices").value);
    const cantidadCuadernos = parseInt(document.getElementById("cantidad_cuadernos").value);
    const cantidadLapiceras = parseInt(document.getElementById("cantidad_lapiceras").value);

    const totalLapices = calcularPrecioLapices(cantidadLapices);
    const totalCuadernos = calcularPrecioCuadernos(cantidadCuadernos);
    const totalLapiceras = calcularPrecioLapiceras(cantidadLapiceras);
    const totalCompra = totalLapices + totalCuadernos + totalLapiceras;

    mostrarResultado(totalCompra);
}

function calcularPrecioLapices(cantidad) {
    const precioUnitario = 500; 
    return cantidad * precioUnitario;
}

function calcularPrecioCuadernos(cantidad) {
    const precioUnitario = 1500;
    return cantidad * precioUnitario;
}

function calcularPrecioLapiceras(cantidad) {
    const precioUnitario = 1000;
    return cantidad * precioUnitario;
}

function mostrarResultado(total) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `<p>Total de la compra: $${total}</p>`;
}
