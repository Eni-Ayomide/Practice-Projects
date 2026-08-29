
      let keyvalue = document.querySelector('.keyup')

      function keyvchange(){

        document.querySelector('.keyupclass').innerText = keyvalue.value

      }

      String(67)
      console.log('25' - 5);
      console.log("25" + 5);


      window.console.log('Hi')
      window.document


function handlecostkeydown(event){
    console.log('typing');
    console.log(event.key);

    if(event.key === 'Enter'){
      calculatetotal();
    }
    
}

      function calculatetotal(){

        const cost = document.querySelector('.js-costinput')

       let costvalue = Number (cost.value);

       if(costvalue < 40){
        costvalue+=10;
       }

       document.querySelector('.js-totalcost')
       .innerHTML = `$${costvalue}`;
      }



      function subscribe(){
        const buttonElement = document.querySelector('.js-subscribe-button');

      if (buttonElement.innerText === 'Subscribe'){

        buttonElement.innerText = 'Subscribed'
      }
      else{
        buttonElement.innerText = 'Subscribe'
      }
      }
