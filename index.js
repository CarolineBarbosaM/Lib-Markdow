//import chalk from 'chalk';
import fs from 'fs';


function extrairLiks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
    const arrayResultado = [];
    let temp;

    while ((temp = regex.exec(texto)) !== null) {
        arrayResultado.push({ [temp[1]]: temp[2] })
    }
    
    return arrayResultado.length === 0 ? 'Não há links': arrayResultado;
}

function trataError(erro) {
    throw new Error(chalk.red(erro.code, 'Não há arquivo no caminho'));
}

async function pegarArquivo(caminhoDoArquivo) {
    try {
        const enconding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, enconding)
    
        console.log(extrairLiks(texto));
    } catch (error) {
        trataError(error)
    } finally {
        console.log(chalk.yellow('operação concluída'));
    }
}

export function pegarArquivo()