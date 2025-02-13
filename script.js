function mostrarMensaje() {
    document.querySelector(".carta").style.opacity = "0";
    document.querySelector(".carta").style.transform = "scale(0.8)";

    setTimeout(() => {
        document.querySelector(".carta").style.display = "none";
        document.getElementById("mensaje").style.display = "block";
        setTimeout(() => {
            document.getElementById("mensaje").style.opacity = "1";
            iniciarCorazones();
        }, 100);
    }, 500);
}

function iniciarCorazones() {
    setInterval(crearCorazon, 500);
}

function crearCorazon() {
    const corazon = document.createElement("div");
    corazon.innerHTML = "❤️";
    corazon.classList.add("corazon");
    document.body.appendChild(corazon);

    const size = Math.random() * 20 + 10 + "px";
    corazon.style.fontSize = size;

    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.animationDuration = Math.random() * 3 + 2 + "s";

    setTimeout(() => {
        corazon.remove();
    }, 4000);
}