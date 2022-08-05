import { pegarArquivo } from '../index';

const arrayResult = [
    {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
    }
]

describe('pegarArquivo::', () => {
    it('Deve ser uma função', () => {
        expect(typeof pegarArquivo).toBe('function');
    })

    it('Deve retornar array com resultados', async () => {
        const result = await pegarArquivo('/home/carolinemartins/Documentos/GitHub/Lib-Markdow/test/arquivos/texto1.md')
        expect(result).toEqual(arrayResult)
    })

    it('Deve retornar mensagem "não há links"', async () => {
        const resultado = await pegarArquivo('/home/carolinemartins/Documentos/GitHub/Lib-Markdow/test/arquivos/texto1_semlink.md')
        expect(resultado).toBe('não há links');
    })

    it('Deve lançar um erro na falta de arquivo', async () => {
        await expect(pegarArquivo('/home/carolinemartins/Documentos/GitHub/Lib-Markdow/test/arquivos')).rejects.toThrow('não há arquivo no caminho')
      })
})
