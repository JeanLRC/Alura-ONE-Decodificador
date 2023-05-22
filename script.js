const inputText = document.querySelector(".text-area");
const outputText = document.querySelector(".mensagem");

function btnEncriptar() {
    const textoEncriptado = encripta(inputText.value);
    if (textoEncriptado) {
        removeImagem();
        outputText.innerHTML = textoEncriptado;
        inputText.value = "";
    }
}

function encripta(currentText) {
    if (currentText === "") {
        return "";
    }
    let replaceKeys = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat"
    }
    let textoEncriptado = currentText.toLowerCase().replace(/[aeiou]/gi, (match) => replaceKeys[match]);
    return textoEncriptado;
}

function btnDesencriptar() {
    const textoDesencriptado = desencripta(inputText.value);
    if (textoDesencriptado) {
        removeImagem();
        outputText.innerHTML = textoDesencriptado;
        inputText.value = "";
    }
}

function desencripta(currentText) {
    if (currentText === "") {
        return "";
    }
    let replaceKeys = {
        "ai": "a",
        "enter": "e",
        "imes": "i",
        "ober": "o",
        "ufat": "u"
    }
    let textoDesencriptado = currentText.toLowerCase().replace(/ai|enter|imes|ober|ufat/gi, (match) => replaceKeys[match]);
    return textoDesencriptado;
}

function removeImagem() {
    const mensagemElement = document.querySelector('.mensagem');
    mensagemElement.style.backgroundImage = "none";
}

function btnCopiar() {
    const textoParaCopiar = outputText.innerHTML;
    if (textoParaCopiar) {
        navigator.clipboard.writeText(textoParaCopiar)
            .then(() => {
                outputText.innerHTML = "Texto copiado para a area de tranferencia"
                console.log('Text copied to clipboard: ' + textoParaCopiar);
            })
            .catch((error) => {
                console.error('Error copying text: ', error);
            });
    }
}

function checaAcentuacao() {
    const texto = inputText.value;
    const accentRegex = /[áàãâäéèẽêëíìĩîïóòõôöúùũûüç]/i;
    if (accentRegex.test(texto)) {
        alert("Texto não pode conter acentuação!");
    }
}