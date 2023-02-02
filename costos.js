var ancho;
var alto;
var metrosC;
var cantLana;
var cantSilicona;
var porcentaje;


var parrafoMetros;
var parrafoLana;
var parrafoLienzo;
var parrafoFin;
var parrafohorasT;
var parrafoTotal

var costoSilicona;
var costoLana;
var costoLienzo;
var costoFriselina;
var costoFin;

var precioLana = 3400; /*Precio x kilo (por mayor)*/ 
var precioLienzo = 2400;   /*Precio 1/2 Lienzo*/
var precioSilicona = 120; /*precio silicona por unidad*/
var precioFriselina = 700; /*precio friselina x mtsC*/
var precioPromPeg = 812; //precio del pegamento/alfombras que salen con 4l
   
var horasTrabajo;
var subtotal;
var total;

const comenzar = () =>{
    console.log("comence");
    /*calcular mtsCuadrados*/
    ancho = document.getElementById("ancho").value;
    alto = document.getElementById("alto").value;
    metrosC = ancho * alto;
    parrafoMetros = "Metros Cuadrados: " + metrosC
    document.getElementById("metrosC").innerHTML = parrafoMetros;

    /*precio lana*/
    cantLana = (metrosC * 1.2
        )/0.5;
    costoLana = (cantLana * precioLana);
    parrafoLana = "Costo Lana: " + costoLana; 
    document.getElementById("costoLana").innerHTML = parrafoLana;

    /*Precio Lienzo*/
    /*porcentaje = ((metrosC * 100)/1.92) 
    if (porcentaje > 55 ) {
     costoLienzo = precioLienzo
    }else if(porcentaje <= 55 && porcentaje > 25){
        costoLienzo = precioLienzo / 2;
    }else if (porcentaje <= 25){
        costoLienzo = precioLienzo / 4
    }*/
    costoLienzo = precioLienzo/2;
    console.log(porcentaje);
    parrafoLienzo = "Costo Lienzo: " + costoLienzo
    document.getElementById("costoLienzo").innerHTML = parrafoLienzo;
    /*Precio finalizacion + total*/
    cantSilicona = ((metrosC * 10)/0.4); //10 es cantidad silicona
    costoSilicona = cantSilicona * precioSilicona;
    costoFriselina = metrosC * precioFriselina;
    costoFin = costoFriselina + costoSilicona + 500 + precioPromPeg;/*500 del cordon (calcular proxima compra)*/
    
    parrafoFin = "Costo Finalización: " + costoFin;
    document.getElementById("costoFin").innerHTML = parrafoFin;

    subtotal = costoFin + (costoLienzo) + costoLana;

    horasTrabajo = subtotal;
    parrafohorasT = "Horas de Trabajo: " + horasTrabajo;
    document.getElementById("horasTrabajo").innerHTML = parrafohorasT;
    total  = subtotal + horasTrabajo
    parrafoTotal = "Total: " + total;
    document.getElementById("total").innerHTML = parrafoTotal;
} 