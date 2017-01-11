"use strict"

var modal = document.querySelector("#container")


var boton = document.querySelector (".Rectangle1")

var cerrar = document.querySelector ("#cerrar")

boton.addEventListener("click", pintaModal)

function pintaModal () {
  modal.style.display = "block"
}

cerrar.addEventListener("click", cierraModal)

function cierraModal() {
  modal.style.display = "none"
}
