/**
 * @description Função que constrói uma pessoa
 * 
 * @param {String} nome - nome da pessoa
 * @param {String} sobrenome - sobrenome da pessoa
 */
function Pessoa({ nome, sobrenome }) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = function () {
        return `${this.nome} ${this.sobrenome}`;
    }
}

const pessoa = new Pessoa({
    nome: 'Diogo',
    sobrenome: 'Ferreira'
});

console.log(pessoa.nomeCompleto());