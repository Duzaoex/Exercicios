const readline = require('readline-sync');
// Const os = require('node:os')
const fs = require('fs').promises;
const path = require('path');

const name = readline.question('Qual seu nome? ');
console.log(`Seu nome tem ${name.length} letras`);
// Console.log(`Você está em um computador com o seguinte processador`, os.cpus())
const filePath = path.resolve(__dirname, 'test.json');

if (name.length > 5) {
	console.log('Arquivo:', filePath);
}

fs.writeFile(filePath, 'conteúdo')
	.then(() => console.log('Escrita deu certo'))
	.catch(() => console.log('Escrita deu errado'));
