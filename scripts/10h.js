
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

       if(costvalue < 40 && costvalue>0){
        costvalue+=10;
        document.querySelector('.js-totalcost')
       .innerHTML = `$${costvalue}`;
       }
       else if(costvalue < 0){
        document.querySelector('.costError').innerText = 'Error: cost cannot be less than 0';
       }
       
      }



      function subscribe(){
        const buttonElement = document.querySelector('.js-subscribe-button');

      if (buttonElement.innerText === 'Subscribe'){

        buttonElement.innerText = 'Subscribed';
        buttonElement.classList.add('is-subscribed');
      }
      else{
        buttonElement.innerText = 'Subscribe'
        buttonElement.classList.remove('is-subscribed');
      }
      }