const gridContainer = document.querySelector(".gridContainer")
const gridInput = document.querySelector("#grid")
const gridP = document.querySelector(".gridP")
const gridButton = document.querySelector(".newGrid")
let gridDivs = document.querySelectorAll(".gridDiv")
const clearBtn = document.querySelector(".clear")
const colorPicker = document.querySelector("#color")
const rgbBtn = document.querySelector(".rgbMode")
const infoHeader = document.querySelector("h3")
const eraserBtn = document.querySelector(".eraser")
gridP.innerText = "10 X 10"

let rgbMode = false
let isRgb = 0
let isMouseDown = false
let eraserMode = false
let isEraser = 0

rgbBtn.style.backgroundColor = "red"
eraserBtn.style.backgroundColor = "red"

//Showing and change grid
gridInput.addEventListener("change", ()=>{
    gridP.innerText = `${gridInput.value} X ${gridInput.value}`
     gridContainer.innerHTML = ""
    for(let i=0; i < gridInput.value * gridInput.value; i++){
        const newDiv = document.createElement("div")
        newDiv.classList.add("gridDiv")
        newDiv.style.width = `${500/gridInput.value}px`
        newDiv.style.height = `${500/gridInput.value}px`
        gridContainer.append(newDiv)
        infoHeader.innerText = "You can change your brush color or pick RGB mode for rainbow paint"
   }
   gridDivs = document.querySelectorAll(".gridDiv")
})


//Change brush color
colorPicker.addEventListener("change", ()=>{
    isRgb = 0
    rgbMode = false
    console.log("changed")
     infoHeader.innerText = ""
})



//Erase button BG changer
eraserBtn.addEventListener("click", ()=>{
isEraser++
    if(isEraser%2 === 0){
        eraserMode = false
        eraserBtn.style.backgroundColor = "red"
    }
    else if(isEraser%2 === 1){
        eraserMode = true
        eraserBtn.style.backgroundColor = "green"
    }
})


// Painting divs when mouseenter
gridContainer.addEventListener("mouseenter", ()=>{
     gridDivs = document.querySelectorAll(".gridDiv")
        gridDivs.forEach((div)=>{
            div.addEventListener("mouseenter", (e)=>{
                 
                if(eraserMode && isMouseDown){
                    div.style.backgroundColor = "white"
                }
                else if(rgbMode === false && isMouseDown){
                     div.style.backgroundColor = `${colorPicker.value}`
                }
                else if(rgbMode && isMouseDown){
                     div.style.backgroundColor = randomColor()
                }
               
            })
        })
})


window.addEventListener("mousedown", ()=>{
    isMouseDown = !isMouseDown
    console.log("mouse down ")
})

window.addEventListener("mouseup", ()=>{
    isMouseDown = !isMouseDown
    console.log("mouse up")
})




// Clear all grids
clearBtn.addEventListener("click", ()=>{
    gridDivs.forEach((grid)=>{
        grid.style.backgroundColor = "white"
    })
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
 infoHeader.innerText = ""
    if(isRgb%2 === 0){
        rgbMode = false
        
        rgbBtn.style.backgroundColor = "red"
    }
    else if(isRgb%2 === 1){
        rgbMode = true

        rgbBtn.style.backgroundColor = "green"
        
    }
})











