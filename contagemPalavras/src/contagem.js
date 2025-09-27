export function divisaoParagrafos(texto){

    const paragrafos = texto.toLowerCase().split('\n');
    const contagem = paragrafos.flatMap(paragrafo => {
        if(!paragrafo) return [];
        return contagemPalavras(refinaTexto(paragrafo));

    })
    return contagem;
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