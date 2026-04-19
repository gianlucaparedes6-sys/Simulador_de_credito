//AQUI TODA LA LOGICA DE LAS FUNCIONES DEL NEGOCIO
function calcularDisponible(ingresos, egresos) {   
let disponible = ingresos - egresos;

    if (disponible < 0) {
        return 0;
    }

    return disponible;
}
function calcularCapacidadPago(montoDisponible) {
    let capacidadPago = montoDisponible * 0.5;
    return capacidadPago;
}
function calcularInteresSimple(monto, tasa, plazo) {
    let interes = monto * (tasa/100) * plazo;
    return interes;
}
function calcularTotalPagar(monto, interes) {
    let totalPagar = (monto + interes)+100;
    return totalPagar;
}
function calcularCuotaMensual(totalPagar, plazo) {
    let meses = plazo * 12;
    let cuotaMensual = totalPagar / meses;
    return cuotaMensual;
}
function aprobarCredito(capacidadPago, cuotaMensual) {
    if (capacidadPago >= cuotaMensual) {
        return "APROBADO";
    } else {
        return "RECHAZADO";
    }   
}