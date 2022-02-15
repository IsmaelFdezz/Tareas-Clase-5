const $botonCalcular = document.querySelector("#calcular");

$botonCalcular.onclick = function() {
  const salarioAnual = Number(document.querySelector("#salario-anual").value);
  const mesesAño = 12
  let salarioMensual

  salarioMensual = salarioAnual / mesesAño;

  console.log(salarioMensual);
  document.querySelector("#salario-mensual").value = salarioMensual
  return false;
}
