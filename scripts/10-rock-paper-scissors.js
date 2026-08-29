
      let score = JSON.parse(localStorage.getItem('score')) || {
          Wins:0,
          losses:0,
          Ties:0};


      console.log(JSON.parse(localStorage.getItem('score')));


      function computerGuess(){
        rand = Math.random();

        if(rand>=0 && rand <=1/3){
          compguess = 'rock';
        }
        else if(rand >1/3 && rand <=2/3){
          compguess = 'paper';
        }
        else if(rand >2/3 && rand <=1){
          compguess = 'scissors';
        }
        return compguess;
      }
      function compareResult(playermove){

        c_guess = computerGuess();

        if(playermove === 'rock'){

          
          if(c_guess === 'rock'){
            result = 'tie'
          }
          else if(c_guess === 'paper'){
            result = 'you lose'
          }
          else if(c_guess === 'scissors'){
            result = 'you win'
          }
        }
      else if(playermove === 'paper'){
        if(c_guess === 'rock'){
          result = 'you win'
        }
        else if(c_guess === 'paper'){
          result = 'tie'
        }
        else if(c_guess === 'scissors'){
          result = 'you lose'
        }
      }
      else if(playermove === 'scissors'){
        if(c_guess === 'rock'){
          result = 'you lose'
        }
        else if(c_guess === 'paper'){
          result = 'you win'
        }
        else if(c_guess === 'scissors'){
          result = 'tie'
        }
      }

      if(result === 'you win'){
        score.Wins++;
      }
      else if(result === 'you lose'){
        score.losses++;
      }
      else if(result === 'tie'){
        score.Ties++;
      }
      localStorage.setItem('score', JSON.stringify(score));
      
       document.querySelector('.js-result').innerHTML =result;


      document.querySelector('.js-moves').innerHTML = `You 
      <image class = 'move-icon' src="images/${playermove}-emoji.png">
      <image class = 'move-icon' src="images/${c_guess}-emoji.png">Compter`;

      updatescoreElement();
      }

      updatescoreElement();
      

       function updatescoreElement(){

        document.querySelector('.js-score').innerHTML

       = ` Wins: ${score.Wins}, losses: ${score.losses}, Ties: ${score.Ties}`;
       }

       
       
