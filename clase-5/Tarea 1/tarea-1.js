const $botonCalcular = document.querySelector("#calcular");

$botonCalcular.onclick = function() {
  const salarioAnual = Number(document.querySelector("#salario-anual").value);
  const mesesAnio = 12
  const salarioMensual = salarioAnual / mesesAnio;

  document.querySelector("#salario-mensual").value = salarioMensual
  return false;
}
