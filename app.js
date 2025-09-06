const gridContainer = document.querySelector(".gridContainer")
const gridInput = document.querySelector("#grid")
const gridP = document.querySelector(".gridP")
const gridButton = document.querySelector(".newGrid")
let gridDivs = document.querySelectorAll(".gridDiv")

gridP.innerText = "10 X 10"


//Showing current grid to user
gridInput.addEventListener("change", ()=>{
    gridP.innerText = `${gridInput.value} X ${gridInput.value}`
})



//Clear and add grids
gridButton.addEventListener("click", ()=>{
    gridContainer.innerHTML = ""
    for(let i=0; i < gridInput.value * gridInput.value; i++){
        const newDiv = document.createElement("div")
        newDiv.classList.add("gridDiv")
        newDiv.style.width = `${500/gridInput.value}px`
        newDiv.style.height = `${500/gridInput.value}px`
        gridContainer.append(newDiv)
        
   }
})


//Painting divs when mouseenter
gridContainer.addEventListener("mouseenter", ()=>{
     gridDivs = document.querySelectorAll(".gridDiv")
        gridDivs.forEach((div)=>{
            div.addEventListener("mouseenter", ()=>{
                console.log("dakfjas")
                div.style.backgroundColor = "red"
            })
        })
})












