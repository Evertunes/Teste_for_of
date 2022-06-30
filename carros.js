//array
const carros = [
  { id: 1, modelo: "Corsa", marca: "Chevrolet", preco: 18000 },
  { id: 2, modelo: "Punto", marca: "Fiat", preco: 12000 },
  { id: 3, modelo: "Gol", marca: "Volkswagen", preco: 14000 },
  { id: 4, modelo: "Saveiro", marca: "Volkswagen", preco: 20000 },
  { id: 5, modelo: "Uno", marca: "Fiat", preco: 12000 },
];

let total = 0;

//for Of faz calculo de valor do carro

for (const carro of carros) {
  total += carro.preco;
}

// converte o número para padrão monetário

const valorFinal = Number(total).toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL",
});

console.log(valorFinal); // R$ 76.000,00
