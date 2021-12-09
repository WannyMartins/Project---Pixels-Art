/* let createPalete = document.createElement('section');
let ondePaleteFica = document.querySelector('body');
createPalete.id ='color-palette';
ondePaleteFica.appendChild(createPalete);

let blocos =[0,1,2,3];

for(let i =0; i < blocos.length; i+=1){
    let criaBlocos = document.createElement('div');
    let ondeBlocosFica = document.getElementById('color-palette');
    criaBlocos.className = 'color'
    ondeBlocosFica.appendChild(criaBlocos);
    i=blocos[i];
    
}

 function recebeId(id){
let idOrdem = document.getElementsByClassName('color')
for(let i = 0; i < idOrdem.length; i += 1){
    idOrdem[i].id=id[i]
   

    }
}
let ids = ['primeira', 'segunda', 'terceira', 'quarta']

recebeId(ids);
 */
window.onload = function() {
    function setBackgroundColor(color) {
      let cor = document.querySelector(".pixel")
      cor.style.backgroundColor = 'white'
//
    }