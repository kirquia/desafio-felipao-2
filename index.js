function calcularRank(saldoRankeadas) {
    var resultado;

    if (saldoRankeadas < 10) {
        resultado = "Ferro";
    } else if (saldoRankeadas >= 11 && saldoRankeadas <= 20) {
        resultado = "Bronze";
    } else if (saldoRankeadas >= 21 && saldoRankeadas <= 50) {
        resultado = "Prata";
    } else if (saldoRankeadas >= 51 && saldoRankeadas <= 80) {
        resultado = "Ouro";
    } else if (saldoRankeadas >= 81 && saldoRankeadas <= 90) {
        resultado = "Diamante";
    } else if (saldoRankeadas >= 91 && saldoRankeadas <= 100) {
        resultado = "Lendário";
    } else {
        resultado = "Imortal";
    }
    return resultado;
}
// Exemplo de uso:
var vitorias = 133;
var derrotas = 34;
var saldoRankeadas = vitorias - derrotas;

var resultadoRank = calcularRank(saldoRankeadas);
console.log("O Herói tem de saldo de", saldoRankeadas, "vitórias Rankeadas e está no nível", resultadoRank);
