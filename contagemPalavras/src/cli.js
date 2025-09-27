import fs from 'fs';
import path from 'path';
import trataErros from '../erros/funcoesErro.js';
import { divisaoParagrafos } from './contagem.js';
import { montaSaidaArquivo } from './helpers.js';
import { Command } from 'commander';

const program = new Command();

program
    .version('0.0.1')
    .option('-t, --texto <string>', 'caminho do texto para processo')
    .option('-d, --destino <string>', 'caminho da pasta para salvar resultado')
    .action((options) => {
        const {texto, destino} = options;

        if(!texto || !destino){
            console.error('erro: falha no caminho de origem e destino');
            program.help();
            return;
        }

        const caminhoTexto = path.resolve(texto);
        const caminhoDestino = path.resolve(destino);

        try {
            processaArquivo(caminhoTexto, caminhoDestino);
            console.log('texto processado');

        }catch(erro){
            console.log('ocorreu o erro: ',erro);

        }
    })
program.parse();

function processaArquivo(texto, destino){
    fs.readFile(texto, "utf-8", (erro, texto) => {
    try{
        if(erro) throw erro;
        const resultado = divisaoParagrafos(texto);
        criaESalvaArquivo(resultado, destino);

    }catch(erro){
        trataErros(erro);
    }
    })
}

async function criaESalvaArquivo(listaPalavras, endereco){

    const arquivoNovo = `${endereco}/resultado.txt`;
    const textoPalavras = montaSaidaArquivo(listaPalavras);

    try{
        await fs.promises.writeFile(arquivoNovo, textoPalavras);

    }catch(erro){

    }
}
