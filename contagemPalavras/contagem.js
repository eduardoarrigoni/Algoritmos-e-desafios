const fs = require('fs');

const caminhoArquivo = process.argv;
const local = caminhoArquivo[2];

fs.readFile(local, "utf-8", (erro, texto) => {
    try{
        if(erro) throw erro;
        divisaoParagrafos(texto);

    }catch(erro){

        if(erro.code === 'ENOENT') console.log('Caminho errado');
        else console.log('Outro problema');
    }
    
})
function divisaoParagrafos(texto){

    const paragrafos = texto.toLowerCase().split('\n');
    const contagem = paragrafos.flatMap(paragrafo => {
        if(!paragrafo) return [];
        return contagemPalavras(refinaTexto(paragrafo));

    })
    console.log(contagem);
}
function refinaTexto(texto){
    return texto.replace(/[.,\/#?!$%\^&\*;:{}=\r\-_`~()]/g, '');;
}
function contagemPalavras(texto){

    const objetosDuplicados = {}
    const palavrasSeparadas = texto.split(' ');

    palavrasSeparadas.forEach(element => {
        
        if (element.length >= 3) {

            objetosDuplicados[element] = (objetosDuplicados[element] || 0) + 1
        }
    });
    return objetosDuplicados;
    
}