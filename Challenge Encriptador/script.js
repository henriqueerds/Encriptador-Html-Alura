const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".text-mensagem");

function btEncriptar(){
    const textEncriptado = encriptar(textArea.value);
    mensagem.value = textEncriptado;
    textArea.value = "";
}

function encriptar(stringencritar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringencritar = stringencritar.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringencritar.includes(matrizCodigo[i][0])){
            stringencritar = stringencritar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringencritar;
}

function btDescriptar(){
    const textDescriptado = descriptar(textArea.value);
    mensagem.value = textDescriptado;
    textArea.value = "";
}

function descriptar(stringencritar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringencritar = stringencritar.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringencritar.includes(matrizCodigo[i][0])){
            stringencritar = stringencritar.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringencritar;
}
function copiartexto(){
    var textarea = document.getElementById("meuTextarea");
    textarea.select();
    document.execCommand("copy");

}
