window.onload = [setColorBlack, setBackgroundColor] 

     
    
    function setColorBlack(){
    let corInicial = document.querySelector('#black');
    corInicial.className ='color selected'
    }
    

    function setBackgroundColor() {
        let cor = document.querySelector(".pixel")
        cor.style.backgroundColor = 'white'
        }

       let colors = document.querySelectorAll('.color')
       for (let i = 0; i < colors.length; i+=1){
        colors[i].addEventListener("click", mudaClasseSlected)
        }
    function mudaClasseSlected(item) {
        for (let i = 0; i < colors.length; i+=1){
            colors[i].className = "color"
        } 
        item.target.className = "color selected"
    } // vi esse código do Rodrigo castro no slack


    document.querySelector('#black').style.backgroundColor = 'black'
document.querySelector('#blue').style.backgroundColor = 'blue'
document.querySelector('#yellow').style.backgroundColor = 'yellow'
document.querySelector('#green').style.backgroundColor = 'green'

var pixel = document.querySelectorAll('.pixel');
 
 
for(let i =0; i <pixel.length;i+=1){

    pixel[i].addEventListener('click', function(event){
        let selected = document.querySelector('.selected').style.backgroundColor;  
        event.target.style.backgroundColor = selected;   
    } )
}
    ////////////////////////
/* let apagaCorPixel = document.querySelector('#clear-board');
var pixelBoard = document.querySelector('#pixel-board')

apagaCorPixel.addEventListener('click', function (event){
    while(document.querySelector('.pixel').style.backgroundColor!== 'white'){
        var branco= document.querySelector('.pixel');
        branco.style.backgroundColor='white'
    }
   
 })

 */ 


//Referencias
//https://medium.com/@erycd/como-adicionar-e-remover-classes-de-elementos-html-com-vanilla-js-7b6527b7aa2f  >>>>>> aprendi a usar o .toggle)

//uso do onclick >>>>>> https://www.w3schools.com/jsref/event_onclick.asp