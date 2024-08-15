let nombres = [];
let paises = [];

function mostrarMensaje(frase) {
    alert(frase);
}

function guardar() {
    let todosLlenos = true;

    // Guardar los valores en los arreglos
    for (let i = 1; i <= 4; i++) {
        nombres[i - 1] = document.getElementById(`nombre${i}`).value;
        paises[i - 1] = document.getElementById(`pais${i}`).value;
    }

    // Verificar si algún campo está vacío
    for (let i = 0; i < 4; i++) {
        if (nombres[i] === "" || paises[i] === "") {
            alert('Hay casillas sin ocupar');
            todosLlenos = false;
            break;
        }
    }

    // Si todos los campos están llenos
    if (todosLlenos) {
        sessionStorage.setItem('nombres', JSON.stringify(nombres));
        sessionStorage.setItem('paises', JSON.stringify(paises));

        // Mostrar los datos en la tabla correspondiente
        for (let i = 0; i < 4; i++) {
            document.getElementById(`nombre${i + 1}`).textContent = nombres[i];
            document.getElementById(`pais${i + 1}`).textContent = paises[i];
            window.location.href = '../segundaPagina/indexOscuro.html';
        }
    }

}

function volver_1() {
    window.location.href = '../index.html';
}


function cargarInfo() {
    nombres = JSON.parse(sessionStorage.getItem('nombres')) || [];
    paises = JSON.parse(sessionStorage.getItem('paises')) || [];

    for (let i = 0; i < 4; i++) {
        if (nombres[i] && paises[i]) {
            document.getElementById(`nombre${i + 1}`).value = nombres[i];
            document.getElementById(`pais${i + 1}`).value = paises[i];
        }
    }
}

function redirigir() {
    guardar(); // Guardar la información antes de redirigir
    window.location.href = '../segundaPagina/indexOscuro.html';
}

function volver() {
    window.location.href = '../terceraPagina/indexAlterno.html';
}

function volver_2() {
    window.location.href = '../segundaPagina/indexOscuro.html';
}
window.onload = function () {
    // Si hay datos en el sessionStorage, cargarlos en los inputs
    let storedNombres = JSON.parse(sessionStorage.getItem('nombres')) || [];
    let storedPaises = JSON.parse(sessionStorage.getItem('paises')) || [];

    if (storedNombres.length > 0 && storedPaises.length > 0) {
        for (let i = 0; i < 4; i++) {
            document.getElementById(`nombre${i + 1}`).value = storedNombres[i];
            document.getElementById(`pais${i + 1}`).value = storedPaises[i];
            document.getElementById(`nombre${i + 1}`).textContent = storedNombres[i];
            document.getElementById(`pais${i + 1}`).textContent = storedPaises[i];
        }
    }
}

