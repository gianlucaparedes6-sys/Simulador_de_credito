//AQUI EL JAVASCRIPT PARA MANIPULAR EL HTMLfunction calcularDisponible(ingresos, egresos) {
 function calcular(){
    //recuperamos los componentes de las cajas de textos
    //recuperamos los valores de los componentes todo esto desde utilitarios.js
    let ingresos = parseFloat(document.getElementById("txtIngresos").value);
    let egresos = parseFloat(document.getElementById("txtEgresos").value);
    //disponible
    let disponible = calcularDisponible(ingresos,egresos);
    disponible = parseFloat(disponible.toFixed(2));
    document.getElementById("spnDisponible").textContent = disponible;
    //capacidad de pago
    let capacidadPago = calcularCapacidadPago(disponible);
    capacidadPago = parseFloat(capacidadPago.toFixed(2));
    document.getElementById("spnCapacidadPago").textContent = capacidadPago;
    //interes simple
    let monto = parseFloat(document.getElementById("txtMonto").value);
    let tasa = parseInt(document.getElementById("txtTasaInteres").value);
    let plazo = parseInt(document.getElementById("txtPlazo").value);
    let interes = calcularInteresSimple(monto,tasa,plazo);
    interes = parseFloat(interes.toFixed(2));
    document.getElementById("spnInteresPagar").textContent = interes;
    //total a pagar
    let totalPagar = calcularTotalPagar(monto,interes);
    totalPagar = parseFloat(totalPagar.toFixed(2));
    document.getElementById("spnTotalPrestamo").textContent = totalPagar;
    //cuota mensual
    let cuotaMensual = calcularCuotaMensual(totalPagar,plazo);
    cuotaMensual = parseFloat(cuotaMensual.toFixed(2));
    document.getElementById("spnCuotaMensual").textContent = cuotaMensual;
    //estado del credito
    let estadoCredito = aprobarCredito(capacidadPago,cuotaMensual);
    document.getElementById("spnEstadoCredito").textContent = estadoCredito;

}
