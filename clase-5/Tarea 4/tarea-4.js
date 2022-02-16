let emPromedio = document.querySelector("#promedio")
let emMasPequenio = document.querySelector("#mas-pequenio")
let emMasGrande = document.querySelector("#mas-grande")
let emMasFrecuente = document.querySelector("#mas-frecuente")


document.querySelector("#calcular").onclick = function() {
        const $numeros = document.querySelectorAll("li")
        const arrayNumeros = []
        for(let i = 0; i < $numeros.length; i++) {
            arrayNumeros.push(Number(document.querySelectorAll("li")[i].innerText))
        }
    
    function calcularPromedio(arrayNumeros) {
        let suma = 0
        resultadoPromedio = 0
        for (let i = 0; i < arrayNumeros.length; i++) {
            suma += Number(arrayNumeros[i])
        }
        return  suma / arrayNumeros.length
    
    }
    function calcularNumeroMasPequenio(arrayNumeros) {
        let numeroMenor = arrayNumeros[0]
        for(let i = 1; i < arrayNumeros.length; i++) {
            if(arrayNumeros[i] < numeroMenor) {
                numeroMenor = arrayNumeros[i]
            }
        }
        return numeroMenor
    }
    function calcularNumeroMasGrande(arrayNumeros) {
        let numeroMayor = arrayNumeros[0]
        for(let i = 1; i < arrayNumeros.length; i++) {
            if(arrayNumeros[i] > numeroMayor) {
                numeroMayor = arrayNumeros[i]
            }
        }
        return numeroMayor
    }
    function calcularNumeroMasFrecuente(arrayNumeros) {
        let contadorRepeticiones = 0
        let numeroFrecuente;
        let contadorMaximo = 0

        for(let i = 0; i < arrayNumeros.length; i++) {
            for(let u = 0; u < arrayNumeros.length; u++) {
                if (arrayNumeros[i] === arrayNumeros[u]) {
                    contadorRepeticiones ++
                }
                if (contadorRepeticiones > contadorMaximo){
                    contadorMaximo = contadorRepeticiones
                    numeroFrecuente = arrayNumeros[i]
                }
            }    
            contadorRepeticiones = 0
        }
        return numeroFrecuente
    }

    emPromedio.innerText += " " + calcularPromedio(arrayNumeros)
    emMasPequenio.innerText += " " + calcularNumeroMasPequenio(arrayNumeros)
    emMasGrande.innerText += " " + calcularNumeroMasGrande(arrayNumeros)
    emMasFrecuente.innerText += " " + calcularNumeroMasFrecuente(arrayNumeros)

}





function obtenerNumeroRepetido(arrayObjetivo) {
    let numeroRepetido;
    let contador = 0;
    let contadorMaximo = 0;
    for (i = 0; i < arrayObjetivo.length; i++) {
        for (j = 0; j < arrayObjetivo.length; j++) {
            if (arrayObjetivo[i] === arrayObjetivo[j]) {
                contador++;
            }
            if (contador > contadorMaximo) {
                contadorMaximo = contador;
                numeroRepetido = arrayObjetivo[i];
            }
        }
        contador = 0;
    }
    return numeroRepetido;
}
    


















