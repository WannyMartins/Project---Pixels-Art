function setColorBlack() {
  const corInicial = document.querySelector('#black');
  corInicial.className = 'color selected';
}

function setBackgroundColor() {
  const quadroCores = document.getElementById('pixel-board');
  const cor = document.querySelector('.pixel');
  cor.style.backgroundColor = 'white';
  
}

window.onload = [setColorBlack, setBackgroundColor];

const colors = document.querySelectorAll('.color');

function mudaClasseSlected(item) {
  for (let i = 0; i < colors.length; i += 1) {
    colors[i].className = "color";
  }
  item.target.className = "color selected";
} // vi esse código do Rodrigo castro no slack
for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', mudaClasseSlected);
}

document.querySelector('#black').style.backgroundColor = 'black';
document.querySelector('#blue').style.backgroundColor = 'blue';
document.querySelector('#yellow').style.backgroundColor = 'yellow';
document.querySelector('#green').style.backgroundColor = 'green';

var pixel = document.querySelectorAll('.pixel');


  for (let i = 0; i < pixel.length; i += 1){
  pixel[i].addEventListener('click', function(event){
  let selected = document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = selected;
 })
}
var apagaCorPixel = document.querySelector('#clear-board')
apagaCorPixel.addEventListener('click', refreshPage)


 function refreshPage(){
    window.location.reload();
        //https://www.ti-enxame.com/pt/javascript/botao-que-atualiza-pagina-ao-clicar/1051967998/=== atualiza a pagina quando clica.
} 
 
const boardSize = document.getElementById('board-size');
const botaoVQV = document.getElementById('generate-board');


botaoVQV.addEventListener('click', aumentaTamanho)

function apagaPixelBoard(){
  const quadroCores = document.getElementById('pixel-board');

  while (quadroCores.firstChild){
     quadroCores.removeChild(quadroCores.firstChild)
  }
 //referencia do while ..... developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild
}
function aumentaTamanho(numero){
  const quadroCores = document.getElementById('pixel-board');
// com ajuda do colega Rafael Moreci
  numero = boardSize.value;
  if(numero >= 5 && numero<=50){  
  
  apagaPixelBoard();

  

 
    for(let item = 0; item < numero; item += 1){
    const container = document.createElement('div');
    container.className='container';
    quadroCores.appendChild(container)
      for(let i = 0; i < numero; i += 1){
        const pixel2 = document.createElement('div')
        pixel2.className='pixel';
        container.appendChild(pixel2)
      }
  }

 
  }else if (numero<5 ){
    apagaPixelBoard();
    numero = 5;
    for(let item = 0; item < numero; item += 1){
      const container = document.createElement('div');
      container.className='container';
      quadroCores.appendChild(container)
        for(let i = 0; i < numero; i += 1){
          const pixel2 = document.createElement('div')
          pixel2.className='pixel';
          container.appendChild(pixel2)
        }
      }
    
  alert("Board inválido!")
  
  
  }else{
    apagaPixelBoard();

    numero = 50;
    for(let item = 0; item < numero; item += 1){
      const container = document.createElement('div');
      container.className='container';
      quadroCores.appendChild(container)
        for(let i = 0; i < numero; i += 1){
          const pixel2 = document.createElement('div')
          pixel2.className='pixel';
          container.appendChild(pixel2)
        }
      }
    


    alert("Board inválido!")
   
  } 
  boardSize.value=null
}

