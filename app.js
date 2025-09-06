const gridContainer = document.querySelector(".gridContainer")
const gridInput = document.querySelector("#grid")
const gridP = document.querySelector(".gridP")
const gridButton = document.querySelector(".newGrid")
let gridDivs = document.querySelectorAll(".gridDiv")
const clearBtn = document.querySelector(".clear")
const colorPicker = document.querySelector("#color")
const rgbBtn = document.querySelector(".rgbMode")

gridP.innerText = "10 X 10"

let rgbMode = false
let isRgb = 0
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
                if(rgbMode === false){
                     div.style.backgroundColor = `${colorPicker.value}`
                }
                else{
                     div.style.backgroundColor = randomColor()
                }
               
            })
        })
})


// Clear all grids
clearBtn.addEventListener("click", ()=>{
    gridContainer.innerHTML = ""
    console.log("clear")
})



//Rainbow Random Color Pick Function
let randomColor = ()=>{
    let r = Math.floor(Math.random() * 255) +1
    let g = Math.floor(Math.random() * 255) +1
    let b = Math.floor(Math.random() * 255) +1
    return `rgb(${r}, ${g}, ${b})`
}


//RGB paint or normal paint
rgbBtn.addEventListener("click", ()=>{
isRgb++

    if(isRgb%2 === 0){
        rgbMode = false
    }
    else if(isRgb%2 === 1){
        rgbMode = true
    }
})


//Yarin basili tutarken cizme, silgi ile silebilme mekaniğini kodla









