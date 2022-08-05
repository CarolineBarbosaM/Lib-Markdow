import { fetch } from 'node-fetch';

function manejaErros(erro) {
    throw new Error(erro.menssage);
}

async function checaStatus(arrayUrls) {
    try {
        const arrayStatus = await Promise
        .all(arrayUrls
            .map(async url => {
                const res = await fetch(url)
                return `${res.status} - ${res.statusText}`;
        }))

        return arrayStatus
    } catch (error) {
        manejaErros(error);
    }
}

function geraArrayDeURLs(arrayLinks) {
    return arrayLinks
    .map(objetoLink => Object
        .values(objetoLink).join())
}

async function validaURLs(arrayLinks) {
    const links = geraArrayDeURLs(arrayLinks);
    const statusLinks = await checaStatus(links);

    const resultados = arrayLinks
        .map(objeto, indice => ({
            ...objeto, 
            status: statusLinks[indice],
        }))
    
    return resultados;
}

module.exports = validaURLs;