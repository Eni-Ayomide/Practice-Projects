let element = document.querySelector('.cart');

element.classList.add('js-button');

let result= element.classList.contains('js-button')

console.log(result);


function statechanger(cbutton){
  if(cbutton === 'game'){
  const selector = document.querySelector('.game');
  if(selector.classList.contains('toggle')){

   selector.classList.remove('toggle');
   console.log('removed')
  }
  else{
    selector.classList.add('toggle')
    console.log('added')
  }
}
else if(cbutton ==='music'){
    const selector = document.querySelector('.music');
  if(selector.classList.contains('tog')){

   selector.classList.remove('tog');
   console.log('removed')
  }
  else{
    selector.classList.add('tog')
    console.log('added')
  }
}
else if(cbutton ==='tech'){
    const selector = document.querySelector('.tech');
  if(selector.classList.contains('togg')){

   selector.classList.remove('togg');
   console.log('removed')
  }
  else{
    selector.classList.add('togg')
    console.log('added')
  }
}
}
