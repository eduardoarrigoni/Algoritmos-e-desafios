import fs from 'fs';
import trataErros from './erros/funcoesErro.js';
import { divisaoParagrafos } from './contagem.js';
import { montaSaidaArquivo } from './helpers.js';

const caminhoArquivo = process.argv;
const local = caminhoArquivo[2];
const localEscrita = caminhoArquivo[3];

fs.readFile(local, "utf-8", (erro, texto) => {
    try{
        if(erro) throw erro;
        const resultado = divisaoParagrafos(texto);
        criaESalvaArquivo(resultado, localEscrita);

    }catch(erro){
        trataErros(erro);
    }
    
})

async function criaESalvaArquivo(listaPalavras, endereco){

    const arquivoNovo = `${endereco}/resultado.txt`;
    const textoPalavras = montaSaidaArquivo(listaPalavras);

    try{
        await fs.promises.writeFile(arquivoNovo, textoPalavras);

    }catch(erro){

    }
}
