const $botonIngresar = document.querySelector("#ingresar")

$botonIngresar.onclick = function() {
    const primerNombre = document.querySelector("#primer-nombre").value
    const segundoNombre = document.querySelector("#segundo-nombre").value
    const apellido = document.querySelector("#apellido").value
    const edad = Number(document.querySelector("#edad").value)

    console.log(`Nombre: ${primerNombre} ${segundoNombre} ${apellido} Edad: ${edad}`)
    document.querySelector("#informacion").value = `Nombre: ${primerNombre} ${segundoNombre} ${apellido} Edad: ${edad}`;
    cambiarH1 (primerNombre, segundoNombre, apellido)
    return false;
}

function cambiarH1 (primerNombre, segundoNombre, apellido) {
    const CambiarH1 = document.querySelector("h1")
    CambiarH1.style.fontSize = "60px"
    CambiarH1.style.color = "blue"
    return CambiarH1.innerText= `Bienvenido, ${primerNombre} ${segundoNombre} ${apellido}`
}