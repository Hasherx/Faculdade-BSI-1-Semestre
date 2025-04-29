function cumprimentar(nome){
	function formatarNome(n){
		return n.toUpperCase();
	};
	return "Olá," + formatarNome(nome);
};

console.log(cumprimentar("Thor")); // Olá, THOR
