// Obtém os valores digitados pelo usuário na página anterior
var urlParams = new URLSearchParams(window.location.search);
var nome = urlParams.get('nome');
var cpf = urlParams.get('cpf');
var renda = parseFloat(urlParams.get('renda'));

// Calcula a alíquota e o imposto a ser pago
let aliquota, imposto;
if (renda <= 22847.76) {
  aliquota = 0;
  imposto = 0;
} else if (renda <= 33919.80) {
  aliquota = 0.075;
  imposto = (renda - 22847.76) * aliquota + 1713.58;
} else if (renda <= 45012.60) {
  aliquota = 0.15;
  imposto = (renda - 33919.80) * aliquota + 4257.57;
} else if (renda <= 55976.16) {
  aliquota = 0.225;
  imposto = (renda - 45012.60) * aliquota + 7633.51;
} else {
  aliquota = 0.275;
  imposto = (renda - 55976.16) * aliquota + 10432.32;
}

// Exibe o resultado na página atual
document.write("<h1>Relatório de Imposto de Renda</h1>");
document.write("<p><strong>Nome:</strong> " + nome + "</p>");
document.write("<p><strong>CPF:</strong> " + cpf + "</p>");
document.write("<p><strong>Rendimento Anual:</strong> R$ " + renda.toFixed(2) + "</p>");
document.write("<p><strong>Alíquota:</strong> " + (aliquota * 100).toFixed(2) + "%</p>");
document.write("<p><strong>Imposto a Pagar:</strong> R$ " + imposto.toFixed(2) + "</p>");
