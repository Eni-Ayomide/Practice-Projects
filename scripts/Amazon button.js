let element = document.querySelector('.cart');

element.classList.add('js-button');

let result= element.classList.contains('js-button')

console.log(result);


function statechanger(cbutton) {

  let buttons = document.querySelectorAll('.game, .music, .tech');

    buttons.forEach(function(buttons){
      buttons.classList.remove('toggle');
    })

  let button = document.querySelector(`.${cbutton}`);

  button.classList.add('toggle')
}
