let expression =''


function expressiongetter(value) {
  display=document.querySelector('.result')
  if(value !== 'clear' ) {
    if (value === '=') {
     res = eval(expression)
        res;
        nres = String(res);
        display.innerText = nres;
        expression = res
        return
    }
    expression = expression + value;
    display.innerText = expression;
    return expression;
}
else{
  expression =' ';
  display.innerText =  expression
}
}