/**
 * @description Função fabrica para uma pessoa.
 * 
 * @param {String} nome - nome da pessoa
 * @param {String}  sobrenome - sobrenome da pessoa
 * @param {Integer} idade - idade da pessoa
 * @param {String} [hobbye] - hobbye da pessoa
 */
function criaPessoa({ nome, sobrenome, idade, hobbye = 'Sem hobbye.' }) {
    return {
        nome,
        sobrenome,
        idade,
        hobbye,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`;
        },
        set nomeCompleto({ novoNome }) {
            novoNome = novoNome.split(' ');

            this.nome = novoNome.shift();
            this.sobrenome = novoNome.join(' ');
        }
    }
}

// Ivocando...
const pessoa = criaPessoa({
    nome: 'Diogo',
    sobrenome: 'Ferreira',
    idade: 18,
    hobbye: null
});

console.log(pessoa.nomeCompleto);

// Atualizando nome...
pessoa.nomeCompleto = { novoNome: 'Diogo Fernandes' };

console.log(pessoa.nomeCompleto);