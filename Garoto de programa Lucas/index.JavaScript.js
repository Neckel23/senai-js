
const listaDePecas = ['peca de teste', 'AB', 'peca b']


console.log('quantidade de caracteres')


if(listaDePecas.length <=10) {
    console.log('as peças podem ser cadastradas')

}      

console.log('quantidade de caracteres')



for(let index = 0; index < listaDePecas.length; index++) {
    const pecaAtual = listaDePecas[index];
    if(pecaAtual.length < 3 ) {
        console.log(pecaAtual + ':a peça atual possui nome inferior a 3 caracteres e não pode ser cadastrada.')
    }else{
        console.log(pecaAtual + ':a peça pode se cadastrada.')
    }
}



console.log('peso da peça')

const pesoDaPecaEmGramas = 50;

if(pesoDaPecaEmGramas >= 100) {
    console.log('peso suficiente.')
}else {
    console.log('valor insuficiente')
}