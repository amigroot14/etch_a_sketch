// -----####-----Global Variables/DOM Elements-----####-----


inputEl=document.getElementById('input')
submitBtn=document.querySelector('.submit-btn')
gridForm=document.querySelector('#grid-form')
containerEl=document.querySelector('.container')
clearBtn=document.getElementById('clear-btn')
eraserBtn=document.getElementById('eraser-btn')
pickColor=document.getElementById('pick-color')
pickColorBtn=document.getElementById('pick-color-btn')
resetColorBtn=document.getElementById('reset-color-btn')

// -----####-----Initial Load/DOM Load-----####-----
updateGrid(20)
effect()
// -----xxxx----------xxxx----------xxxx-----

// -----####-----Hover effect-----####-----
function effect(color){
grids=document.querySelectorAll('.grid')
grids.forEach((grid)=>{
    grid.addEventListener('mouseover',()=>{
        grid.style.background=color?color:randomColor()
    })
})
}
// -----xxxx----------xxxx----------xxxx-----

// -----####-----Removes the individual grids from the container-----####-----
function removeChildNodes(containerEl){
    while(containerEl.firstChild){
        containerEl.removeChild(containerEl.firstChild)
    }
}
// -----xxxx----------xxxx----------xxxx-----

// -----####-----Updates the sixe of the grid-----####-----
function updateGrid(gridsize){
    removeChildNodes(containerEl)

    for(i=0;i<gridsize*gridsize;i++){
        let grid=document.createElement('div')
        grid.classList.add('grid')
        containerEl.appendChild(grid)
        containerEl.style.gridTemplateColumns=`repeat(${gridsize},${gridsize}fr)`
        containerEl.style.gridTemplateRows=`repeat(${gridsize},${gridsize}fr)`
    }
}
// -----xxxx----------xxxx----------xxxx-----

// -----####-----Selects random colour using hex code-----####-----
function randomColor(){
    var letters='0123456789ABCDEF'
    var color='#'
    for(i=0;i<6;i++){
        color+=letters[Math.floor(Math.random()*16)]
    }
    return color
}
// -----xxxx----------xxxx----------xxxx-----

// -----####-----Reset the color to default-----####-----
function reset(){
    grids.forEach(grid=>{
        grid.style.background='aliceblue'
    })
}
// -----xxxx----------xxxx----------xxxx-----

// -----####-----Eraser(Defaults the color on hover)-----####-----
function eraser(){
    effect('aliceblue')
}
// -----xxxx----------xxxx----------xxxx-----


// -----####-----Event Listeners-----####-----
eraserBtn.addEventListener('click',()=>{
    if(eraserBtn.classList.contains('clicked')){
        eraserBtn.classList.remove('clicked')
        effect()
    }
    else{
        eraserBtn.classList.add('clicked')
        eraser()
    }
})

pickColor.addEventListener('change',()=>{
    effect(pickColor.value)
})

resetColorBtn.addEventListener('click', ()=>{
    effect()
})

clearBtn.addEventListener('click',reset)
gridForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    updateGrid(inputEl.value)
    effect()
})