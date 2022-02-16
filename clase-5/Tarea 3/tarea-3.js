const $botonCalcular=document.querySelector("#boton-calcular");
const segundosEnUnMinuto = 60
const minutosEnUnaHora = 60
let resultado = document.querySelector("#resultado")

$botonCalcular.onclick=function() {
    const $horasVideos = document.querySelector(".horas")
    const $minutosVideos = document.querySelector(".minutos")
    const $segundosVideos = document.querySelector(".segundos")
    let totalHoras = 0
    let totalMinutos = 0
    let totalSegundos = 0

    for (let i = 0; i < $horasVideos.length; i++) {
        totalHoras += Number($horasVideos[i].value)
    }

    for (let i = 0; i < $minutosVideos.length; i++) {
        totalMinutos += Number($minutosVideos[i].value)
    }
    while (totalMinutos >= minutosEnUnaHora) {
        totalHoras ++
        totalMinutos --
    }

    for (let i = 0; i < $segundosVideos.length; i++) {
        totalSegundos += Number($segundosVideos[i].value)
    }
    while (segundosTotal >= segundosEnUnMinuto) {
        totalMinutos  ++
        totalSegundos --
    }

    console.log(totalHoras)
    console.log(totalMinutos)
    console.log(totalSegundos)

    resultado.innerText = `El tiempo total de los videos es de ${totalHoras} horas, ${totalMinutos} minutos, ${totalSegundos}, segundos`
    return false

}