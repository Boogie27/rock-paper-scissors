
  
  var counter = 0;
  var playerScore = 0;
  var computerScore = 0;

  var compSC = document.querySelector(".computer");
  var playSC   =  document.querySelector(".player");
  

    var computerPlay = function(){
        var  element = ["rock", "paper", "scissors"];
        var x = Math.floor(Math.random() * element.length);
        var comp = element[x];
       
      return comp;
    }


    var playRound = function (player, computer){
              var message;
             if(player === computer){
                  message = "Game tie, Play agin!"; 
                  document.querySelector(".win").textContent = message;
                  document.querySelector(".winner").classList.add("gameTie");
                  document.querySelector(".winner").classList.remove("playerContainer");
                  document.querySelector(".winner").classList.remove("computerContainer");
             }else{
               document.querySelector(".alert").textContent = "";
               if(player === "rock"){
                    if(computer === "scissors"){
                        message = "You win! "+player+" beats "+computer;
                        document.querySelector(".win").textContent = message;
                        playerScore++;
                        playSC.textContent = playerScore;
                        document.querySelector(".winner").classList.remove("gameTie");
                        document.querySelector(".winner").classList.remove("refresh");
                        document.querySelector(".winner").classList.add("playerContainer");
                        document.querySelector(".winner").classList.remove("computerContainer");
                    }else{
                        message = "You loose! "+computer+" beats "+player;
                        document.querySelector(".win").textContent = message;
                        computerScore++;
                        compSC.textContent = computerScore;
                        document.querySelector(".winner").classList.remove("gameTie");
                        document.querySelector(".winner").classList.remove("refresh");
                        document.querySelector(".winner").classList.remove("playerContainer");
                        document.querySelector(".winner").classList.add("computerContainer");
                    }
               }

               if(player === "paper"){
                if(computer === "rock"){
                    message = "You win! "+player+" beats "+computer;
                    document.querySelector(".win").textContent = message;
                    playerScore++;
                    playSC.textContent = playerScore;
                    document.querySelector(".winner").classList.remove("gameTie");
                    document.querySelector(".winner").classList.remove("refresh");
                    document.querySelector(".winner").classList.add("playerContainer");
                    document.querySelector(".winner").classList.remove("computerContainer");
                }else{
                    message = "You loose! "+computer+" beats "+player;
                    document.querySelector(".win").textContent = message;
                    computerScore++;
                    compSC.textContent = computerScore;
                    document.querySelector(".winner").classList.remove("gameTie");
                    document.querySelector(".winner").classList.remove("refresh");
                    document.querySelector(".winner").classList.remove("playerContainer");
                    document.querySelector(".winner").classList.add("computerContainer");
                }
             }

                if(player === "scissors"){
                  if(computer === "paper"){
                      message = "You win! "+player+" beats "+computer;
                      document.querySelector(".win").textContent = message;
                      playerScore++;
                      playSC.textContent = playerScore;
                      document.querySelector(".winner").classList.remove("gameTie");
                      document.querySelector(".winner").classList.remove("refresh");
                      document.querySelector(".winner").classList.add("playerContainer");
                      document.querySelector(".winner").classList.remove("computerContainer");
                  }else{
                      message = "You loose! "+computer+" beats "+player;
                      document.querySelector(".win").textContent = message;
                      computerScore++;
                      compSC.textContent = computerScore;
                      document.querySelector(".winner").classList.remove("gameTie");
                      document.querySelector(".winner").classList.remove("refresh");
                      document.querySelector(".winner").classList.remove("playerContainer");
                      document.querySelector(".winner").classList.add("computerContainer");
                  }
               }
                counter++;
                document.querySelector(".counter").textContent = counter;
                console.log(counter);
             }

             return message;
    }
   
    
    var reset = function(){
         counter = 0;
         playerScore = 0;
         computerScore = 0;
         document.querySelector(".counter").textContent = counter;
         document.querySelector(".player").textContent = "";
         document.querySelector(".computer").textContent = "";
         document.querySelector(".win").textContent = "You Vs Computer";
         document.querySelector(".winner").style.backgroundColor = "";
         document.querySelector(".alert").textContent = "";
         document.querySelector(".winner").style.backgroundColor = "";
         document.querySelector(".winner").classList.remove("gameTie");
         document.querySelector(".winner").classList.remove("playerContainer");
         document.querySelector(".winner").classList.remove("computerContainer");
         document.querySelector(".winner").classList.add("refresh");
    }
   
  
    document.querySelector(".win").textContent = "You Vs Computer";
    document.querySelector(".winner").classList.add("refresh");
    document.querySelector(".counter").textContent = counter; 
   
    var button = document.querySelector(".button");
        button.onclick = function(){
              var computerSection = computerPlay();
           
              function game(){ 
                var element = ["rock", "paper", "scissors"];   
                var player1 = prompt("Choose element Rock, Paper or Scissors");
                var playerSection = player1.toLowerCase();
                var compare = element.includes(playerSection);
                if(counter < 5){
                    if(compare === true){
                        console.log(playRound(playerSection, computerSection));
                    }else{
                      game();
                    }
                    
                }
                if(counter === 5){
                    if(playerScore > computerScore){
                      document.querySelector(".win").textContent = "You Win!";
                      document.querySelector(".winner").style.backgroundColor = "rgb(103, 239, 103)";
                      document.querySelector(".alert").textContent = "Game Over!";
                    }else{
                      document.querySelector(".win").textContent = "You loose!";
                      document.querySelector(".alert").textContent = "Game Over!";
                      document.querySelector(".winner").style.backgroundColor = "red";
                  }
                }
          }

           game();
        }

        

    var resetGame = document.querySelector(".reset");
        resetGame.onclick = function(){
             reset();
        }




       function openDesc(){
            document.querySelector(".description").style.display = "block";
            document.querySelector(".game").style.display = "none";
       }

       function closeDesc(){
        document.querySelector(".description").style.display = "none";
        document.querySelector(".game").style.display = "block";
   }
