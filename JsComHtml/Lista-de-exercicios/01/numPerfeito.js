const numero = parseInt(prompt("Digite o numero o qual deseja verificar."));
let soma = 0;
for (let i = 1; i < numero; i++) {
	numero % i=== 0 ? (soma += i) : null;
}
switch (soma === numero){
	case true:
		alert(`${numero} é perfeito.`);
		break;
	default:
		alert(`${numero} não e perfeito.`)

}