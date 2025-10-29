// Seleccionamos elementos
const contadorElemento = document.getElementById("contador");
const recaudacionElemento = document.getElementById("recaudacion");
const precioElemento = document.getElementById("precio");

const btnAgregar = document.getElementById("agregar");
const btnRestar = document.getElementById("restar");
const btnReiniciar = document.getElementById("reiniciar");

const sonidoAgregar = document.getElementById("sonidoAgregar");
const sonidoRestar = document.getElementById("sonidoRestar");

// Variables
let contador = 0;
let precio = parseInt(precioElemento.textContent);

// Funciones
function actualizarPantalla() {
    contadorElemento.textContent = contador;
    recaudacionElemento.textContent = "売上: ¥" + (contador * precio);
}

btnAgregar.addEventListener("click", () => {
    contador++;
    actualizarPantalla();

    // Reproducir sonido sin superponer
    sonidoAgregar.currentTime = 0;
    sonidoAgregar.play();
});

btnRestar.addEventListener("click", () => {
    if (contador > 0) {
        contador--;
        actualizarPantalla();

        // Reproducir sonido sin superponer
        sonidoRestar.currentTime = 0;
        sonidoRestar.play();
    }
});

btnReiniciar.addEventListener("click", () => {
    contador = 0;
    actualizarPantalla();
});