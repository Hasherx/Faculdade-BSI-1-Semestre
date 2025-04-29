function processarUsuario(nome,callback){
	console.log("Processando usuário"+" "+nome);
	callback();
};
processarUsuario("Thor",function(){
	console.log("Usuário processado!");
});