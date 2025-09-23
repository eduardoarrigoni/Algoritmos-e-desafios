const fs = require('fs');

const caminhoArquivo = process.argv;
const local = caminhoArquivo[2];

fs.readFile(local, "utf-8", (erro, texto) => {
    divisaoParagrafos(texto);
    
})
function divisaoParagrafos(texto){

    const paragrafos = texto.toLowerCase().split('\n');
}
function contagemPalavras(texto){

    
}