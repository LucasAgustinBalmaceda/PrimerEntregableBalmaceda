function calcularTotal() {
    const cantidadLapices = parseInt(document.getElementById("cantidad_lapices").value);
    const cantidadCuadernos = parseInt(document.getElementById("cantidad_cuadernos").value);
    const cantidadLapiceras = parseInt(document.getElementById("cantidad_lapiceras").value);

    if (isNaN(cantidadLapices) || isNaN(cantidadCuadernos) || isNaN(cantidadLapiceras)) {
        alert("Por favor, ingresa cantidades válidas.");
        return;
    }

    const totalLapices = calcularPrecioLapices(cantidadLapices);
    const totalCuadernos = calcularPrecioCuadernos(cantidadCuadernos);
    const totalLapiceras = calcularPrecioLapiceras(cantidadLapiceras);
    const subtotal = totalLapices + totalCuadernos + totalLapiceras;

    const descuento = calcularDescuento(subtotal);
    const totalCompra = subtotal - descuento;

    mostrarResultado(subtotal, descuento, totalCompra);
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

function calcularDescuento(subtotal) {
    let descuento = 0;
    if (subtotal > 10000) {
        descuento = subtotal * 0.10;
    }
    return descuento;
}

function mostrarResultado(subtotal, descuento, total) {
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <p>Subtotal: $${subtotal.toFixed(2)}</p>
        <p>Descuento: $${descuento.toFixed(2)}</p>
        <p>Total de la compra: $${total.toFixed(2)}</p>
    `;
}
