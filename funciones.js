
// BUSCAR LOS ELEMENTOS DEL HTML

let boton = document.querySelector("#botonGenerar");

let valorB = document.querySelector("#valorB");
let valorC = document.querySelector("#valorC");

let expresion = document.querySelector("#expresion");

let cajaLineal = document.querySelector("#cajaLineal");
let cajaAfin = document.querySelector("#cajaAfin");

let estadoLineal = document.querySelector("#estadoLineal");
let estadoAfin = document.querySelector("#estadoAfin");

let propiedadesLineal = document.querySelector("#propiedadesLineal");
let propiedadesAfin = document.querySelector("#propiedadesAfin");

// GENERAR NUMEROS ALEATORIOS

function generarNumero() {

    return Math.floor(Math.random() * 21) - 10;

}

// FUNCION PARA GENERAR Y CLASIFICAR

function generarFuncion() {

    // GENERAR LOS COEFICIENTES

    let b = generarNumero();
    let c = generarNumero();

    // MOSTRAR LOS NUMEROS

    valorB.innerText = b;
    valorC.innerText = c;

    // MOSTRAR LA EXPRESION MATEMATICA

    if (c > 0) {

        expresion.innerText = "f(x) = " + b + "x + " + c;

    } else if (c < 0) {

        expresion.innerText = "f(x) = " + b + "x - " + Math.abs(c);

    } else {

        expresion.innerText = "f(x) = " + b + "x";

    }

    // COMPROBAR SI ES LINEAL O AFIN

    if (c == 0) {

        // FUNCION LINEAL

        cajaLineal.classList.remove("oculto");
        cajaAfin.classList.add("oculto");

        estadoLineal.innerText = "¡La función es LINEAL!";

        propiedadesLineal.classList.remove("oculto");

    } else {

        // FUNCION AFIN

        cajaAfin.classList.remove("oculto");
        cajaLineal.classList.add("oculto");

        estadoAfin.innerText = "¡La función es AFÍN!";

        propiedadesAfin.classList.remove("oculto");

    }

    // MOSTRAR SI ES CRECIENTE O DECRECIENTE

    if (b > 0) {

        agregarPendiente("La función es creciente.");

    } else if (b < 0) {

        agregarPendiente("La función es decreciente.");

    } else {

        agregarPendiente("La función es constante porque b = 0.");

    }

}

// AGREGAR INFORMACION DE LA PENDIENTE

function agregarPendiente(mensaje) {

    if (valorC.innerText == 0) {

        estadoLineal.innerText =
            "¡La función es LINEAL! " + mensaje;

    } else {

        estadoAfin.innerText =
            "¡La función es AFÍN! " + mensaje;

    }

}

// BOTON PARA GENERAR NUEVOS VALORES

boton.onclick = function() {

    generarFuncion();

};

// SUBIR ARCHIVO DE GEOGEBRA

let archivo = document.querySelector("#archivoGGB");

let nombreArchivo = document.querySelector("#nombreArchivo");

archivo.onchange = function() {

    if (archivo.files.length > 0) {

        let archivoSeleccionado = archivo.files[0];

        if (!archivoSeleccionado.name.toLowerCase().endsWith(".ggb")) {

            nombreArchivo.innerText = "Selecciona un archivo .ggb válido.";

            archivo.value = "";

        } else {

            nombreArchivo.innerText =
                "Archivo seleccionado: " + archivoSeleccionado.name;

        }

    }

};

// INICIAR LA PAGINA CON UNA FUNCION

generarFuncion();