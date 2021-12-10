window.onload = [setColorBlack, setBackgroundColor] 

     
    
    function setColorBlack(){
    let corInicial = document.querySelector('#primeira');
    corInicial.className ='color selected'
    }
    

    function setBackgroundColor() {
        let cor = document.querySelector(".pixel")
        cor.style.backgroundColor = 'white'
    }

       let colors = document.querySelectorAll('.color')
       for (let i = 0; i < colors.length; i+=1){
        colors[i].addEventListener("click", mudaCor)
    }
    function mudaCor(item) {
        for (let i = 0; i < colors.length; i+=1){
            colors[i].className = "color"
        } 
        item.target.className = "color selected"
    } // vi esse código do Rodrigo castro no slack

      
    


 


//Referencias
//https://medium.com/@erycd/como-adicionar-e-remover-classes-de-elementos-html-com-vanilla-js-7b6527b7aa2f  >>>>>> aprendi a usar o .toggle)

//uso do onclick >>>>>> https://www.w3schools.com/jsref/event_onclick.asp