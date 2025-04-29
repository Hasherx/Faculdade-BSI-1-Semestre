async function buscarDados(){
	const reposta = await fetch('https://api.exemplo.com/dados');
	const dados = await resposta.json();
	console.log(dados);
};
const resultado = buscarDados();
console.log(resultado);