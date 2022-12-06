const LISTA = document.querySelector(".lista")
const BUTTON = document.getElementById("button")
const INPUT = document.getElementById("input")

let eliminar =(evt)=>{
    evt.remove()
}

BUTTON.addEventListener("click", ()=>{
   let valor = INPUT.value
//    const item = document.createElement("li")
//    item.textContent = valor
   LISTA.insertAdjacentHTML("afterbegin",
   `<li onClick="eliminar(this)">
   ${valor}
   <button> Eliminar </button>
   </li>`
   )
   INPUT.value = ""
})


