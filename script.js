function setColorBlack() {
  const corInicial = document.querySelector('#black');
  corInicial.className = 'color selected';
}

function setBackgroundColor() {
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

var preto = document.querySelector('#black');
preto.style.backgroundColor = 'black';
var azul = document.querySelector('#blue');
azul.style.backgroundColor = 'blue';
var amarelo = document.querySelector('#yellow');
amarelo.style.backgroundColor = 'yellow';
var verde = document.querySelector('#green');
verde.style.backgroundColor = 'green';

function colorir(event){
  let selected = document.querySelector('.selected').style.backgroundColor;
  event.target.style.backgroundColor = selected;
 }


var pixel = document.getElementsByClassName('pixel');

for (let i = 0; i < pixel.length; i += 1){
  pixel[i].addEventListener('click',colorir)
}

var apagaCorPixel = document.querySelector('#clear-board')
apagaCorPixel.addEventListener('click', clearBoard)

function clearBoard(){
  const pixels = document.getElementsByClassName('pixel');

  for (let i = 0; i < pixels.length; i += 1){
    pixels[i].style.backgroundColor = 'white';
  }
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
      for (let i = 0; i < pixel.length; i += 1){
        pixel[i].addEventListener('click',colorir)
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
      for (let i = 0; i < pixel.length; i += 1){
        pixel[i].addEventListener('click',colorir)
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
      for (let i = 0; i < pixel.length; i += 1){
        pixel[i].addEventListener('click',colorir)
      }
    alert("Board inválido!")
  } 
  boardSize.value=null
}


 
function randomColor(){
function numeroAleatório(min, max) {
  return parseInt(Math.random() * (max - min) + min)
}
var r = numeroAleatório(0, 255);
var g = numeroAleatório(0, 255);
var b = numeroAleatório(0, 255);
cor = 'rgb('+ r +', ' +g+', ' +b+')';

return cor
}
//window.addEventListener('load', );

 function coresAleatoria(){
var azul = document.querySelector('#blue');
azul.style.backgroundColor = 'blue';
var amarelo = document.querySelector('#yellow');
amarelo.style.backgroundColor = 'yellow';
var verde = document.querySelector('#green');
verde.style.backgroundColor = 'green';

 
azul.style.backgroundColor = randomColor();
amarelo.style.backgroundColor = randomColor();
verde.style.backgroundColor = randomColor();
}
 window.addEventListener('load', coresAleatoria)

//referencia na página do stackoverflow >>> https://pt.stackoverflow.com/questions/503252/como-mudar-o-background-color-toda-vez-que-a-p%C3%A1gina-atualizar-javascript]
