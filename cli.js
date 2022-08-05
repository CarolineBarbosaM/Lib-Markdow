import { pegarArquivo } from  '../index.js';
import chalk from 'chalk';
import {validaURLs} from './http.validacao';

const caminho = process.argv;

async function processaTexto(caminhoDoArquivo) {
    const resultado = await pegarArquivo(pegarArquivo(caminhoDoArquivo[2]));
    if (caminho[3] === 'validar') {
        console.log(console.log(chalk.yellow('Links validados'), await validaURLs(resultado)));
    } else {
        console.log(chalk.yellow('Lista de links'), resultado);
    }
}

processaTexto(caminho);