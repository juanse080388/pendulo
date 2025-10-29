let contador = localStorage.getItem("contador") ? parseInt(localStorage.getItem("contador")) : 0;
const precio = 500;
const contadorSpan = document.getElementById("contador");
const recaudacionDiv = document.getElementById("recaudacion");
const soundAgregar = document.getElementById("soundAgregar");
const soundRestar = document.getElementById("soundRestar");

// Función para actualizar valores
function actualizar() {
    contadorSpan.textContent = contador;
    recaudacionDiv.textContent = "Recaudación: $" + (contador * precio);
    localStorage.setItem("contador", contador);
}

// Función para lanzar confeti
function lanzarConfeti() {
    for(let i=0; i<20; i++){
        const confeti = document.createElement("div");
        confeti.classList.add("confeti");
        confeti.style.left = Math.random() * window.innerWidth + "px";
        confeti.style.background = `hsl(${Math.random()*360}, 70%, 70%)`;
        document.body.appendChild(confeti);
        setTimeout(()=> confeti.remove(), 1000);
    }
}

// Botones con sonido que siempre se reproduce
document.getElementById("agregar").onclick = function() {
    contador++;
    // Clonar audio para que suene cada click rápido
    soundAgregar.cloneNode(true).play();
    lanzarConfeti();
    actualizar();
}

document.getElementById("restar").onclick = function() {
    if(contador > 0) {
        contador--;
        // Clonar audio para que suene cada click rápido
        soundRestar.cloneNode(true).play();
    }
    actualizar();
}

document.getElementById("reiniciar").onclick = function() {
    contador = 0;
    actualizar();
}

// Inicializar valores al cargar
actualizar();