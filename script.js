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

