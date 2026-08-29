
      let nameInput = document.querySelector(".nameput")
      
      function keydecider(event){
        if (event.key === "Enter"){
          document.querySelector('.response').innerText = `Your name is ${nameInput.value}`;
        }
        else{
          console.log('typing')
        }

      }

      function responder (){
     

     document.querySelector('.response').innerText = `Your name is ${nameInput.value}`;
      }
