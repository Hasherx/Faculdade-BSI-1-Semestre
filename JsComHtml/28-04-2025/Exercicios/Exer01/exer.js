function difIdade(mensagem){
	alert("***"+mensagem+"***");
}
var MyIdade = parseInt(prompt("Digite sua idade"));
var SisIdade = parseInt(prompt("Digite a idade do seu irmão"));
var difIdadeCalc = Math.abs(MyIdade - SisIdade);

difIdade("Nossa a diferença de idade é "+ difIdadeCalc + " anos.");