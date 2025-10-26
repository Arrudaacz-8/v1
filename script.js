function treinarSintaxe() {
  document.getElementById("mensagem").innerText = "Treinando Sintaxe JavaScript";
}
treinarSintaxe();

alert("Arquivo JavaScript carregado com sucesso!");

let nome = "João";
alert('Bem-vindo(a), $ {João}!');

let numero = prompt("Digite um número:");
let dobro = numero * 2;
console.log('O dobro de ${numero} é ${dobro}');

var idade = 25;
let cidade = "Macapá";
const pais = "Brasil";

console.log("Idade:", idade);
console.log("Cidade:", cidade);
console.log("País:", pais);

let numero2 = 10;
let texto = "Olá Mundo";
let booleano = true;
let array = [1, 2, 3];

console.log("Número:", numero2);
console.log("Texto:", texto);
console.log("Booleano:", booleano);
console.log("Array:", array);

let naoNumero = 0 / 0;
let infinito = 5 / 0;
let vazio = null;
let indefinido;

console.log("NaN:", naoNumero);
console.log("Infinity:", infinito);
console.log("Null:", vazio);
console.log("Undefined:", indefinido);

let frutas = ["Maçã", "Banana", "Laranja", "Abacaxi", "Manga"];
console.log("Terceira fruta:", frutas[2]);

let hoje = new Date();
console.log("Data atual:", hoje.toLocaleDateString());