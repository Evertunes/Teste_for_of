//No exemplo abaixo temos um Array com uma lista de cores e precisamos saber o nome e valor de cada uma das suas propriedades.

const cores = ['Verde', 'Amarelo', 'Azul', 'Branco']

//exibe a posição do array e o seu conteúdo
for (const index in cores){
    console.log(index, cores[index])
}

//No exemplo a seguir temos um objeto chamado pessoa e precisamos retornar o nome e valor de suas propriedades.

const pessoa ={
    nome: 'Bruno',
    idade: 25
}

for (const index in pessoa) // recebe os dados do objeto "pessoa"
{
    console.log(`${index} - ${pessoa[index]}`)
}

//nome - Bruno | idade - 25

// -------------------------------\\----------------------------------------

//No exemplo a seguir demonstramos como somar todos os valores de um Array:

const produtos = [
    { descricao: 'Resma Ofício', valor: 11.50, quantidade: 10 },
    { descricao: 'Lapis preto', valor: 0.50, quantidade: 3 },
    { descricao: 'Transferidor plastico', valor: 1.20, quantidade: 4 }
]

let total = 0

//Recebe as informações do array 'produtos' e conta o valor dos produtos

for (const index in produtos) {
    const {valor, quantidade} = produtos[index]
    total += valor * quantidade 
}

//Converte valor em monetário
const valorFinal = Number(total).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

console.log(`O valor total dos produtos é: ${valorFinal}`);
