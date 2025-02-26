let treino = "       Nao sei oq estou escrevendo e apenas um teste para treinar  !   !";
console.log(treino);

let treinoSemEspaco= treino.replace(/\s+/g, '');
console.log(treinoSemEspaco);

let treinoComUpperCase = treinoSemEspaco.toUpperCase()
console.log(treinoComUpperCase)

let qntCaracteres= treinoComUpperCase.length
console.log(qntCaracteres)