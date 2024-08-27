const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje-encriptado");

const regex = /^[a-zñ\s]+$/;

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar() {
    if (regex.test(textArea.value)){
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        textArea.value = "";
        mensaje.style.background = "none";
    }
    else {

        alert("Solo letras minusculas y sin acento")
    }
}


function encriptar(stringEncriptador) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringEncriptador = stringEncriptador.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptador.includes(matrizCodigo[i][0])) {

            stringEncriptador = stringEncriptador.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
    }
    return stringEncriptador;
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}


function desencriptar(stringDesencriptado) {

    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {

            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }
    }
    return stringDesencriptado;
}

function mensajeCopiar() {

    let mensajeCopiado = mensaje.value;
    mensaje.select()
    navigator.clipboard.writeText(mensajeCopiado)

}



