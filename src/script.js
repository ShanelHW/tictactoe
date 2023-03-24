$(document).ready(function(){
  
    // This will put the 👽 and 🤖 for whatever player has it.
    var player;
    var comp;
    
    // Variable for whether the game has started or not.
    var gameStart = false;
    
    // Boolean for whether the player is going first or not.
    var playerFirst;
    
    // A flag for if it is the player's turn
    var playerTurn;
    
    // Variable to determine whether the computer has made a choice of the AI.
    var computerChoice;
    
    var didWin = false;
    
    // This little function randomly calculates who goes first. Then displays that choice on the screen.
    function randomStart() {
      
      // The random selection of true or false
      playerFirst = Boolean(Math.floor(Math.random() * 2));
      
      // If that selection is true, we make it the player's turn.
      if (playerFirst === true) {
        
        $(".display").text("Your Turn!");
        playerTurn = true;
        
        // Otherwise, its the computer's turn.
      } else {
        
        $(".display").text("Computer's Turn!");
        playerTurn = false;
        
        setTimeout(computerTurn, 1000);
        
      }
      
    }
    
    // This resets the board only and gives a random player the start.
    function resetBoard() {
      
      // makes each space clear.
      $(".one").text("");
      $(".two").text("");
      $(".three").text("");
      $(".four").text("");
      $(".five").text("");
      $(".six").text("");
      $(".seven").text("");
      $(".eight").text("");
      $(".nine").text("");
      
      $(".display").text("New Game!");
      
      playerFirst = NaN;
      didWin = false;
      
      // Random player gets the start.
      randomStart();
      
    }
    
    // This will reset everything for the game.
    function resetEverything() {
      
       // makes each space clear.
      $(".one").text("");
      $(".two").text("");
      $(".three").text("");
      $(".four").text("");
      $(".five").text("");
      $(".six").text("");
      $(".seven").text("");
      $(".eight").text("");
      $(".nine").text("");
      
      $(".display").text("New Game!");
      
      playerFirst = NaN;
      didWin = false;
      
      // Makes the choice box available.
      $(".choice").css("visibility", "visible");
      
      // Clears the little reminder text.
      $(".xoro").text("");
      
      // Stops the game.
      gameStart = false;
      
      // The players are reset.
      player = "";
      comp = "";
      playerFirst = NaN;
      
      //Put on a display that the game reste button has been selected.
      $(".display").text("Game Reset");
      
    }
    
    // if a winning combination is triggered, this checks to see if a player has won.
    function playerCheck(first, second, third) {
      
      if ($(first).text() === comp && $(second).text() === comp && $(third).text() === comp) {
              
        $(".display").text("Computer Wins!");
        checkflag = true;
        didWin = true;
        setTimeout(resetBoard, 1000);
        
      } else if ($(first).text() === player && $(second).text() === player && $(third).text() === player) {
                  
        $(".display").text("Player Wins!");
        checkflag = true;
        didWin = true;
        setTimeout(resetBoard, 1000);
        
      } else {
        
        return;
        
      }
      
    }
    
    // This will check if the selection is the winning one.
    function checkWin() {
      
      var first, second, third;
      var checkFlag = false;
      
      if ($(".one").text() !== "" && $(".two").text() !== "" && $(".three").text() !== "") {
        
        first = ".one";
        second = ".two";
        third = ".three";
        
        playerCheck(first, second, third);
        
      }
      
      if ($(".one").text() !== "" && $(".four").text() !== "" && $(".seven").text() !== "") {
        
        first = ".one";
        second = ".four";
        third = ".seven";
        
        playerCheck(first, second, third);
        
      }
      
      if ($(".one").text() !== "" && $(".five").text() !== "" && $(".nine").text() !== "") {
        
        first = ".one";
        second = ".five";
        third = ".nine";
        
        playerCheck(first, second, third);
        
      }
      
      if ($(".two").text() !== "" && $(".five").text() !== "" && $(".eight").text() !== "") {
        
        first = ".two";
        second = ".five";
        third = ".eight";
        
        playerCheck(first, second, third);
        
      }
      
      if ($(".three").text() !== "" && $(".five").text() !== "" && $(".seven").text() !== "") {
        
        first = ".three";
        second = ".five";
        third = ".seven";
        
        playerCheck(first, second, third);
        
      }
      
      if ($(".three").text() !== "" && $(".six").text() !== "" && $(".nine").text() !== "") {
        
        first = ".three";
        second = ".six";
        third = ".nine";
        
        playerCheck(first, second, third);
        
      }
      
      if ($(".four").text() !== "" && $(".five").text() !== "" && $(".six").text() !== "") {
        
        first = ".four";
        second = ".five";
        third = ".six";
        
        playerCheck(first, second, third);
        
      }
      
      if ($(".seven").text() !== "" && $(".eight").text() !== "" && $(".nine").text() !== "") {
        
        first = ".seven";
        second = ".eight";
        third = ".nine";
        
        playerCheck(first, second, third);
        
      }
      
      if (($(".one").text() !== "" && $(".two").text() !== "" && $(".three").text() !== "" && $(".four").text() !== "" && $(".five").text() !== "" && $(".six").text() !== "" && $(".seven").text() !== "" && $(".eight").text() !== "" && $(".nine").text() !== "") && checkFlag === false) {
        
        $(".display").text("It's a Draw!");
        didWin = true;
        setTimeout(resetBoard, 1000);
        
      }
      
    }
    
    function randomChoice() {
      
      var choice = Math.ceil(Math.random() * 9);
      var choiceID = "#" + choice;
      
      if ($(choiceID).text() !== "") {
        
        randomChoice();
        
      } else {
        
        $(choiceID).text(comp);
        
      }
      
    }
    
    // This is the AI program for the computer player.
    function computerTurn() {
      
      computerChoice = false;
      
      if (playerFirst === false) {
        
        randomChoice();
        computerChoice = true;
        playerFirst = NaN;
        
      }
      
      if (($(".two").text() === player && $(".three").text() === player) || ($(".four").text() === player && $(".seven").text() === player) || ($(".five").text() === player && $(".nine").text() === player)) {
        
        if ($(".one").text() === "" && computerChoice === false) {
          
          $(".one").text(comp);
          computerChoice = true;
          
        }
        
      } 
      
      if (($(".one").text() === player && $(".three").text() === player) || ($(".five").text() === player && $(".eight").text() === player)) {
        
        if ($(".two").text() === "" && computerChoice === false) {
          
          $(".two").text(comp);
          computerChoice = true;
          
        }
        
      }
      
      if (($(".one").text() === player && $(".two").text() === player) || ($(".five").text() === player && $(".seven").text() === player) || ($(".six").text() === player && $(".nine").text() === player)) {
        
        if ($(".three").text() === "" && computerChoice === false) {
          
          $(".three").text(comp);
          computerChoice = true;
          
        }
        
      }
      
      if (($(".one").text() === player && $(".seven").text() === player) || ($(".five").text() === player && $(".six").text() === player)) {
        
        if ($(".four").text() === "" && computerChoice === false) {
          
          $(".four").text(comp);
          computerChoice = true;
          
        }
        
      }
      
      if (($(".one").text() === player && $(".nine").text() === player) || ($(".two").text() === player && $(".eight").text() === player) || ($(".three").text() === player && $(".seven").text() === player) || ($(".four").text() === player && $(".six").text() === player)) {
        
        if ($(".five").text() === "" && computerChoice === false) {
          
          $(".five").text(comp);
          computerChoice = true;
          
        }
        
      }
      
      if (($(".four").text() === player && $(".five").text() === player) || ($(".three").text() === player && $(".nine").text() === player)) {
        
        if ($(".six").text() === "" && computerChoice === false) {
          
          $(".six").text(comp);
          computerChoice = true;
          
        }
        
      }
      
      if (($(".one").text() === player && $(".four").text() === player) || ($(".three").text() === player && $(".five").text() === player) || ($(".eight").text() === player && $(".nine").text() === player)) {
        
        if ($(".seven").text() === "" && computerChoice === false) {
          
          $(".seven").text(comp);
          computerChoice = true;
          
        }
        
      }
      
      if (($(".two").text() === player && $(".five").text() === player) || ($(".seven").text() === player && $(".nine").text() === player)) {
        
        if ($(".eight").text() === "" && computerChoice === false) {
          
          $(".eight").text(comp);
          computerChoice = true;
          
        }
        
      }
      
      if (($(".one").text() === player && $(".five").text() === player) || ($(".seven").text() === player && $(".eight").text() === player) || ($(".three").text() === player && $(".six").text() === player)) {
        
        if ($(".nine").text() === "" && computerChoice === false) {
          
          $(".nine").text(comp);
          computerChoice = true;
          
        }
        
      } 
      
      if (computerChoice === false) {
        
        randomChoice();
        computerChoice = true;
        
      }
      
      $(".display").text("Your Turn!");
      playerTurn = true;
      computerChoice = false;
      
      checkWin();
      
    }
    
    // When we click on the button, it resets everything.
    $(".reset").on("click", function() {
      
      // Run that function
      resetEverything();
      
    });
    
    // This is for the 👽 selection button
    $(".ex").on("click", function(){
      
      // The player is 👽
      player = "👽";
      
      // The computer is 🤖
      comp = "🤖";
      
      // Hides the choice box.
      $(".choice").css("visibility", "hidden");
      
      // Sets the reminder text to 👽.
      $(".xoro").text("👽");
      
      // Random starting player.
      randomStart();
      
      // Game started.
      gameStart = true;
      
    });
    
    // This is for the 🤖 selection button
    $(".oh").on("click", function() {
      
      // The player is 🤖
      player = "🤖";
      
      // The computer is 👽
      comp = "👽";
      
      // Hides the choice box.
      $(".choice").css("visibility", "hidden");
      
      // Sets the reminder text to 👽.
      $(".xoro").text("🤖");
      
      // Random starting player.
      randomStart();
      
      // Game started.
      gameStart = true;
      
    });
    
    // This places a mark for the player
    $(".tic").on("click", function() {
      
      // If the game isn't started, don't do anything.
      if (gameStart === false || playerTurn === false) {
        
        return;
        
      }
      
      // If this space already has a selection
      if ($(this).text() !== "") {
        
        // Display that there has to be another selection and don't do anything.
        $(".display").text("Choose another space.");
        return;
        
      }
      
      // Place a mark in the place according to the players choice.
      $(this).text(player);
      
      // The computer's turn.
      playerTurn = false;
      
      // Make it the computer's turn.
      $(".display").text("Computer's Turn!");
      
      checkWin();
      
      if (didWin === false) {
        setTimeout(computerTurn, 1000);
      }
    });
    
  });