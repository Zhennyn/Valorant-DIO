// Variáveis
var nome = "Zhennyn";
var xp = 10000;

// Estrutura de decisão
if (xp <= 1000) {
  nivel = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
  nivel = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
  nivel = "Prata";
} else if (xp >= 5001 && xp <= 8000) {
  nivel = "Ouro";
} else if (xp >= 8001 && xp <= 9000) {
  nivel = "Platina";
} else if (xp >= 9001 && xp <= 10000) {
  nivel = "Ascendente";
} else {
  nivel = "Radiante";
}

// Saída
console.log("O herói de nome " + nome + " está no nível " + nivel);
