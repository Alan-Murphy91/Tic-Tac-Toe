$(document).ready(function(){
    var playingColour;
    var turn = false;
    
    var col1 = '#3299BB';
    var col2 = '#FF9900';
    
    var boxOne = 0;
    var boxTwo = 0;
    var boxThree = 0;
    var boxFour = 0;
    var boxFive = 0;
    var boxSix = 0;
    var boxSeven = 0;
    var boxEight = 0;
    var boxNine = 0;
    
    var aiWins = 0;
    var draws = 0;
    
    $('.col1').click(function(){
        playingColour = col1;
        $('#wrapper').addClass('animated bounceOutUp');
        setTimeout(function(){
        $('#wrapper').css('display', 'none');
        $('#wrapperTwo').css('display', 'block');
        $('#wrapperTwo').addClass('animated rollIn'); 
        }, 800);
        
        if(Math.random() > 0.5){
            turn = true;
            console.log(true);
        } else {
            turn = false;
            AIturn();
            console.log(false);
        }
 
       });
    
    $('.col2').click(function(){
        playingColour = col2;
        $('#wrapper').addClass('animated bounceOutUp');
        setTimeout(function(){
        $('#wrapper').css('display', 'none');
        $('#wrapperTwo').css('display', 'block');
        $('#wrapperTwo').addClass('animated rollIn'); 
        }, 800);
        
        if(Math.random() > 0.5){
            turn = true;
            console.log(true);
        } else {
            turn = false;
            AIturn();
            console.log(false);
        }
 
       });

        
        $('.box1').click(function(){
                if(turn === true){
                if(boxOne === 0){
                boxOne = 1;
                if(playingColour == col1){
                $('.box1').css('background-color', col1);    
                } else {
                $('.box1').css('background-color', col2);     
                }
                turn = false;
                AIturn();
                }
                }
            });
    
        $('.box2').click(function(){
                if(turn === true){
                if(boxTwo === 0){
                boxTwo = 1;
                if(playingColour == col1){
                $('.box2').css('background-color', col1);    
                } else {
                $('.box2').css('background-color', col2);     
                }
                turn = false;
                AIturn();
                }
                }
            }); 
    
        $('.box3').click(function(){
                if(turn === true){
                if(boxThree === 0){
                boxThree = 1;
                if(playingColour == col1){
                $('.box3').css('background-color', col1);    
                } else {
                $('.box3').css('background-color', col2);     
                }
                turn = false;
                AIturn();
                }
                }
            });  
    
        $('.box4').click(function(){
                if(turn === true){
                if(boxFour === 0){
                boxFour = 1;
                if(playingColour == col1){
                $('.box4').css('background-color', col1);    
                } else {
                $('.box4').css('background-color', col2);     
                }
                turn = false;
                AIturn();
                }
                }
            });
    
        $('.box5').click(function(){
                if(turn === true){
                if(boxFive === 0){
                boxFive = 1;
                if(playingColour == col1){
                $('.box5').css('background-color', col1);    
                } else {
                $('.box5').css('background-color', col2);     
                }
                turn = false;
                AIturn();
                }
                }
            });    
    
        $('.box6').click(function(){
                if(turn === true){
                if(boxSix === 0){
                boxSix = 1;
                if(playingColour == col1){
                $('.box6').css('background-color', col1);    
                } else {
                $('.box6').css('background-color', col2);     
                }
                turn = false;
                AIturn();
                }
                }
            });
    
        $('.box7').click(function(){
                if(turn === true){
                if(boxSeven === 0){
                boxSeven = 1;
                if(playingColour == col1){
                $('.box7').css('background-color', col1);    
                } else {
                $('.box7').css('background-color', col2);     
                }
                turn = false;
                AIturn();
                }
                }
            });     
    
        $('.box8').click(function(){
                if(turn === true){
                if(boxEight === 0){
                boxEight = 1;
                if(playingColour == col1){
                $('.box8').css('background-color', col1);    
                } else {
                $('.box8').css('background-color', col2);     
                }
                turn = false;
                AIturn();
                }
                }
            });     
        
        $('.box9').click(function(){
                if(turn === true){
                if(boxNine === 0){
                boxNine = 1;
                if(playingColour == col1){
                $('.box9').css('background-color', col1);    
                } else {
                $('.box9').css('background-color', col2);     
                }
                turn = false;
                AIturn();
                }
                }
            });     
    
    
    
//    --------------------DETERMINE MATCH END-----------------------------

 function CheckAIWin(){
     
        if(boxOne === 2 && boxTwo === 2 && boxThree === 2){
        boxOne = 0;
        boxTwo = 0;
        boxThree = 0;
        boxFour = 0;
        boxFive = 0;
        boxSix = 0;
        boxSeven = 0;
        boxEight = 0;
        boxNine = 0;

        $('.box4').css('background-color', '#E9E9E9');
        $('.box5').css('background-color', '#E9E9E9');
        $('.box6').css('background-color', '#E9E9E9');
        $('.box7').css('background-color', '#E9E9E9');
        $('.box8').css('background-color', '#E9E9E9');
        $('.box9').css('background-color', '#E9E9E9');
            
        setTimeout(function(){
        aiWins ++;
        $('#aiWin').text(aiWins);
            
        $('.box1').css('background-color', '#E9E9E9');
        $('.box2').css('background-color', '#E9E9E9');
        $('.box3').css('background-color', '#E9E9E9');    
        $('.box4').css('background-color', '#E9E9E9');
        $('.box5').css('background-color', '#E9E9E9');
        $('.box6').css('background-color', '#E9E9E9');
        $('.box7').css('background-color', '#E9E9E9');
        $('.box8').css('background-color', '#E9E9E9');
        $('.box9').css('background-color', '#E9E9E9');
        
        if(Math.random() > 0.5){
            turn = true;
            console.log(true);
        } else {
            turn = false;
            AIturn();
            console.log(false);
        }    
            
        }, 2500);  
        }   

     
        else if(boxFour === 2 && boxFive === 2 && boxSix === 2){
        boxOne = 0;
        boxTwo = 0;
        boxThree = 0;
        boxFour = 0;
        boxFive = 0;
        boxSix = 0;
        boxSeven = 0;
        boxEight = 0;
        boxNine = 0;

        $('.box1').css('background-color', '#E9E9E9');
        $('.box2').css('background-color', '#E9E9E9');
        $('.box3').css('background-color', '#E9E9E9');
        $('.box7').css('background-color', '#E9E9E9');
        $('.box8').css('background-color', '#E9E9E9');
        $('.box9').css('background-color', '#E9E9E9');
            
        setTimeout(function(){
        aiWins ++;
        $('#aiWin').text(aiWins);
            
        $('.box1').css('background-color', '#E9E9E9');
        $('.box2').css('background-color', '#E9E9E9');
        $('.box3').css('background-color', '#E9E9E9');    
        $('.box4').css('background-color', '#E9E9E9');
        $('.box5').css('background-color', '#E9E9E9');
        $('.box6').css('background-color', '#E9E9E9');
        $('.box7').css('background-color', '#E9E9E9');
        $('.box8').css('background-color', '#E9E9E9');
        $('.box9').css('background-color', '#E9E9E9');
        
        if(Math.random() > 0.5){
            turn = true;
            console.log(true);
        } else {
            turn = false;
            AIturn();
            console.log(false);
        }    
            
        }, 2500);  
        }   
     
     
        else if(boxSeven === 2 && boxEight === 2 && boxNine === 2){
        boxOne = 0;
        boxTwo = 0;
        boxThree = 0;
        boxFour = 0;
        boxFive = 0;
        boxSix = 0;
        boxSeven = 0;
        boxEight = 0;
        boxNine = 0;

        $('.box4').css('background-color', '#E9E9E9');
        $('.box5').css('background-color', '#E9E9E9');
        $('.box6').css('background-color', '#E9E9E9');
        $('.box1').css('background-color', '#E9E9E9');
        $('.box2').css('background-color', '#E9E9E9');
        $('.box3').css('background-color', '#E9E9E9');
            
        setTimeout(function(){
        aiWins ++;
        $('#aiWin').text(aiWins);
            
        $('.box1').css('background-color', '#E9E9E9');
        $('.box2').css('background-color', '#E9E9E9');
        $('.box3').css('background-color', '#E9E9E9');    
        $('.box4').css('background-color', '#E9E9E9');
        $('.box5').css('background-color', '#E9E9E9');
        $('.box6').css('background-color', '#E9E9E9');
        $('.box7').css('background-color', '#E9E9E9');
        $('.box8').css('background-color', '#E9E9E9');
        $('.box9').css('background-color', '#E9E9E9');
        
        if(Math.random() > 0.5){
            turn = true;
            console.log(true);
        } else {
            turn = false;
            AIturn();
            console.log(false);
        }    
            
        }, 2500);  
        }               

    
        else if(boxOne === 2 && boxFour === 2 && boxSeven === 2){
        boxOne = 0;
        boxTwo = 0;
        boxThree = 0;
        boxFour = 0;
        boxFive = 0;
        boxSix = 0;
        boxSeven = 0;
        boxEight = 0;
        boxNine = 0;

        $('.box2').css('background-color', '#E9E9E9');
        $('.box3').css('background-color', '#E9E9E9');
        $('.box6').css('background-color', '#E9E9E9');
        $('.box9').css('background-color', '#E9E9E9');
        $('.box8').css('background-color', '#E9E9E9');
        $('.box5').css('background-color', '#E9E9E9');
            
        setTimeout(function(){
        aiWins ++;
        $('#aiWin').text(aiWins);
            
        $('.box1').css('background-color', '#E9E9E9');
        $('.box2').css('background-color', '#E9E9E9');
        $('.box3').css('background-color', '#E9E9E9');    
        $('.box4').css('background-color', '#E9E9E9');
        $('.box5').css('background-color', '#E9E9E9');
        $('.box6').css('background-color', '#E9E9E9');
        $('.box7').css('background-color', '#E9E9E9');
        $('.box8').css('background-color', '#E9E9E9');
        $('.box9').css('background-color', '#E9E9E9');
        
        if(Math.random() > 0.5){
            turn = true;
            console.log(true);
        } else {
            turn = false;
            AIturn();
            console.log(false);
        }    
            
        }, 2500);  
        }       

    
        else if(boxTwo === 2 && boxFive === 2 && boxEight === 2){
        boxOne = 0;
        boxTwo = 0;
        boxThree = 0;
        boxFour = 0;
        boxFive = 0;
        boxSix = 0;
        boxSeven = 0;
        boxEight = 0;
        boxNine = 0;

        $('.box1').css('background-color', '#E9E9E9');
        $('.box3').css('background-color', '#E9E9E9');
        $('.box4').css('background-color', '#E9E9E9');
        $('.box6').css('background-color', '#E9E9E9');
        $('.box7').css('background-color', '#E9E9E9');
        $('.box9').css('background-color', '#E9E9E9');
            
        setTimeout(function(){
        aiWins ++;
        $('#aiWin').text(aiWins);
            
        $('.box1').css('background-color', '#E9E9E9');
        $('.box2').css('background-color', '#E9E9E9');
        $('.box3').css('background-color', '#E9E9E9');    
        $('.box4').css('background-color', '#E9E9E9');
        $('.box5').css('background-color', '#E9E9E9');
        $('.box6').css('background-color', '#E9E9E9');
        $('.box7').css('background-color', '#E9E9E9');
        $('.box8').css('background-color', '#E9E9E9');
        $('.box9').css('background-color', '#E9E9E9');
        
        if(Math.random() > 0.5){
            turn = true;
            console.log(true);
        } else {
            turn = false;
            AIturn();
            console.log(false);
        }    
            
        }, 2500);  
        }   
    

        else if(boxThree === 2 && boxSix === 2 && boxNine === 2){
        boxOne = 0;
        boxTwo = 0;
        boxThree = 0;
        boxFour = 0;
        boxFive = 0;
        boxSix = 0;
        boxSeven = 0;
        boxEight = 0;
        boxNine = 0;

        $('.box1').css('background-color', '#E9E9E9');
        $('.box2').css('background-color', '#E9E9E9');
        $('.box4').css('background-color', '#E9E9E9');
        $('.box5').css('background-color', '#E9E9E9');
        $('.box7').css('background-color', '#E9E9E9');
        $('.box8').css('background-color', '#E9E9E9');
            
        setTimeout(function(){
        aiWins ++;
        $('#aiWin').text(aiWins);
            
        $('.box1').css('background-color', '#E9E9E9');
        $('.box2').css('background-color', '#E9E9E9');
        $('.box3').css('background-color', '#E9E9E9');    
        $('.box4').css('background-color', '#E9E9E9');
        $('.box5').css('background-color', '#E9E9E9');
        $('.box6').css('background-color', '#E9E9E9');
        $('.box7').css('background-color', '#E9E9E9');
        $('.box8').css('background-color', '#E9E9E9');
        $('.box9').css('background-color', '#E9E9E9');
        
        if(Math.random() > 0.5){
            turn = true;
            console.log(true);
        } else {
            turn = false;
            AIturn();
            console.log(false);
        }    
            
        }, 2500);  
        }       
     
     
        else if(boxOne === 2 && boxFive === 2 && boxNine === 2){
        boxOne = 0;
        boxTwo = 0;
        boxThree = 0;
        boxFour = 0;
        boxFive = 0;
        boxSix = 0;
        boxSeven = 0;
        boxEight = 0;
        boxNine = 0;

        $('.box2').css('background-color', '#E9E9E9');
        $('.box3').css('background-color', '#E9E9E9');
        $('.box6').css('background-color', '#E9E9E9');
        $('.box7').css('background-color', '#E9E9E9');
        $('.box8').css('background-color', '#E9E9E9');
        $('.box4').css('background-color', '#E9E9E9');
            
        setTimeout(function(){
        aiWins ++;
        $('#aiWin').text(aiWins);
            
        $('.box1').css('background-color', '#E9E9E9');
        $('.box2').css('background-color', '#E9E9E9');
        $('.box3').css('background-color', '#E9E9E9');    
        $('.box4').css('background-color', '#E9E9E9');
        $('.box5').css('background-color', '#E9E9E9');
        $('.box6').css('background-color', '#E9E9E9');
        $('.box7').css('background-color', '#E9E9E9');
        $('.box8').css('background-color', '#E9E9E9');
        $('.box9').css('background-color', '#E9E9E9');
        
        if(Math.random() > 0.5){
            turn = true;
            console.log(true);
        } else {
            turn = false;
            AIturn();
            console.log(false);
        }    
            
        }, 2500);  
        }       
    

        else if(boxThree === 2 && boxFive === 2 && boxSeven === 2){
        boxOne = 0;
        boxTwo = 0;
        boxThree = 0;
        boxFour = 0;
        boxFive = 0;
        boxSix = 0;
        boxSeven = 0;
        boxEight = 0;
        boxNine = 0;

        $('.box1').css('background-color', '#E9E9E9');
        $('.box2').css('background-color', '#E9E9E9');
        $('.box4').css('background-color', '#E9E9E9');
        $('.box8').css('background-color', '#E9E9E9');
        $('.box9').css('background-color', '#E9E9E9');
        $('.box6').css('background-color', '#E9E9E9');
            
        setTimeout(function(){
        aiWins ++;
        $('#aiWin').text(aiWins);
            
        $('.box1').css('background-color', '#E9E9E9');
        $('.box2').css('background-color', '#E9E9E9');
        $('.box3').css('background-color', '#E9E9E9');    
        $('.box4').css('background-color', '#E9E9E9');
        $('.box5').css('background-color', '#E9E9E9');
        $('.box6').css('background-color', '#E9E9E9');
        $('.box7').css('background-color', '#E9E9E9');
        $('.box8').css('background-color', '#E9E9E9');
        $('.box9').css('background-color', '#E9E9E9');
        
        if(Math.random() > 0.5){
            turn = true;
            console.log(true);
        } else {
            turn = false;
            AIturn();
            console.log(false);
        }    
            
        }, 2500);  
        } 
     
     
        else if(boxOne !== 0 && boxTwo !== 0 && boxThree !== 0 && boxFour !== 0 && boxFive !== 0 && boxSix !== 0 && boxSeven !== 0 && boxEight !== 0 && boxNine !== 0){
        boxOne = 0;
        boxTwo = 0;
        boxThree = 0;
        boxFour = 0;
        boxFive = 0;
        boxSix = 0;
        boxSeven = 0;
        boxEight = 0;
        boxNine = 0;          
        setTimeout(function(){
        draws++;
        $('#draw').text(draws);
            
        $('.box1').css('background-color', '#E9E9E9');
        $('.box2').css('background-color', '#E9E9E9');
        $('.box3').css('background-color', '#E9E9E9');    
        $('.box4').css('background-color', '#E9E9E9');
        $('.box5').css('background-color', '#E9E9E9');
        $('.box6').css('background-color', '#E9E9E9');
        $('.box7').css('background-color', '#E9E9E9');
        $('.box8').css('background-color', '#E9E9E9');
        $('.box9').css('background-color', '#E9E9E9');
        
        if(Math.random() > 0.5){
            turn = true;
            console.log(true);
        } else {
            turn = false;
            AIturn();
            console.log(false);
        }    
            
        }, 2500);  
        }
 }   

    

    
function AIturn(){
    
//    ----------------------START OF OFFENSIVE TURNS-------------------------------------------
    
        if(boxOne === 2 && boxTwo === 2 && boxThree === 0 && turn === false){
        setTimeout(function(){
        boxThree = 2;
        if(playingColour == col1){
        $('.box3').css('background-color', col2);    
        } else {
        $('.box3').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxTwo === 2 && boxThree === 2 && boxOne === 0 && turn === false){
        setTimeout(function(){
        boxOne = 2;
        if(playingColour == col1){
        $('.box1').css('background-color', col2);    
        } else {
        $('.box1').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxFour === 2 && boxFive === 2 && boxSix === 0 && turn === false){
        setTimeout(function(){
        boxSix = 2;
        if(playingColour == col1){
        $('.box6').css('background-color', col2);    
        } else {
        $('.box6').css('background-color', col1);     
        }
        CheckAIWin();
        turn = true;     
        }, 2000);
        }
    
        else if(boxFive === 2 && boxSix === 2 && boxFour === 0 && turn === false){
        setTimeout(function(){
        boxFour = 2;
        if(playingColour == col1){
        $('.box4').css('background-color', col2);    
        } else {
        $('.box4').css('background-color', col1);     
        }
        CheckAIWin();
        turn = true;     
        }, 2000);
        }
    
        else if(boxSeven === 2 && boxEight === 2 && boxNine === 0 && turn === false){
        setTimeout(function(){
        boxNine = 2;
        if(playingColour == col1){
        $('.box9').css('background-color', col2);    
        } else {
        $('.box9').css('background-color', col1);     
        }
        CheckAIWin();
        turn = true;     
        }, 2000);
        }
    
        else if(boxEight === 2 && boxNine === 2 && boxSeven === 0 && turn === false){
        setTimeout(function(){
        boxSeven = 2;
        if(playingColour == col1){
        $('.box7').css('background-color', col2);    
        } else {
        $('.box7').css('background-color', col1);     
        }
        CheckAIWin();
        turn = true;     
        }, 2000);
        }
    
        else if(boxOne === 2 && boxFour === 2 && boxSeven === 0 && turn === false){
        setTimeout(function(){
        boxSeven = 2;
        if(playingColour == col1){
        $('.box7').css('background-color', col2);    
        } else {
        $('.box7').css('background-color', col1);     
        }
        CheckAIWin();
        turn = true;     
        }, 2000);
        }
    
        else if(boxSeven === 2 && boxFour === 2 && boxOne === 0 && turn === false){
        setTimeout(function(){
        boxOne = 2;
        if(playingColour == col1){
        $('.box1').css('background-color', col2);    
        } else {
        $('.box1').css('background-color', col1);     
        }
        CheckAIWin();
        turn = true;     
        }, 2000);
        }
    
        else if(boxTwo === 2 && boxFive === 2 && boxEight === 0 && turn === false){
        setTimeout(function(){
        boxEight = 2;
        if(playingColour == col1){
        $('.box8').css('background-color', col2);    
        } else {
        $('.box8').css('background-color', col1);     
        }
        CheckAIWin();
        turn = true;     
        }, 2000);
        }
    
        else if(boxEight === 2 && boxFive === 2 && boxTwo === 0 && turn === false){
        setTimeout(function(){
        boxTwo = 2;
        if(playingColour == col1){
        $('.box2').css('background-color', col2);    
        } else {
        $('.box2').css('background-color', col1);     
        }
        CheckAIWin();
        turn = true;     
        }, 2000);
        }
    
        else if(boxThree === 2 && boxSix === 2 && boxNine === 0 && turn === false){
        setTimeout(function(){
        boxNine = 2;
        if(playingColour == col1){
        $('.box9').css('background-color', col2);    
        } else {
        $('.box9').css('background-color', col1);     
        }
        CheckAIWin();
        turn = true;     
        }, 2000);
        }
    
        else if(boxNine === 2 && boxSix === 2 && boxThree === 0 && turn === false){
        setTimeout(function(){
        boxThree = 2;
        if(playingColour == col1){
        $('.box3').css('background-color', col2);    
        } else {
        $('.box3').css('background-color', col1);     
        }
        CheckAIWin();
        turn = true;     
        }, 2000);
        }
    
        else if(boxOne === 2 && boxFive === 2 && boxNine === 0 && turn === false){
        setTimeout(function(){
        boxNine = 2;
        if(playingColour == col1){
        $('.box9').css('background-color', col2);    
        } else {
        $('.box9').css('background-color', col1);     
        }
        CheckAIWin();
        turn = true;     
        }, 2000);
        }
    
        else if(boxNine === 2 && boxFive === 2 && boxOne === 0 && turn === false){
        setTimeout(function(){
        boxOne = 2;
        if(playingColour == col1){
        $('.box1').css('background-color', col2);    
        } else {
        $('.box1').css('background-color', col1);     
        }
        CheckAIWin();
        turn = true;     
        }, 2000);
        }
    
        else if(boxThree === 2 && boxFive === 2 && boxSeven === 0 && turn === false){
        setTimeout(function(){
        boxSeven = 2;
        if(playingColour == col1){
        $('.box7').css('background-color', col2);    
        } else {
        $('.box7').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxSeven === 2 && boxFive === 2 && boxThree === 0 && turn === false){
        setTimeout(function(){
        boxThree = 2;
        if(playingColour == col1){
        $('.box3').css('background-color', col2);    
        } else {
        $('.box3').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxOne === 2 && boxThree === 2 && boxTwo === 0 && turn === false){
        setTimeout(function(){
        boxTwo = 2;
        if(playingColour == col1){
        $('.box2').css('background-color', col2);    
        } else {
        $('.box2').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxFour === 2 && boxSix === 2 && boxFive === 0 && turn === false){
        setTimeout(function(){
        boxFive = 2;
        if(playingColour == col1){
        $('.box5').css('background-color', col2);    
        } else {
        $('.box5').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxSeven === 2 && boxNine === 2 && boxEight === 0 && turn === false){
        setTimeout(function(){
        boxEight = 2;
        if(playingColour == col1){
        $('.box8').css('background-color', col2);    
        } else {
        $('.box8').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxOne === 2 && boxSeven === 2 && boxFour === 0 && turn === false){
        setTimeout(function(){
        boxFour = 2;
        if(playingColour == col1){
        $('.box4').css('background-color', col2);    
        } else {
        $('.box4').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxTwo === 2 && boxEight === 2 && boxFive === 0 && turn === false){
        setTimeout(function(){
        boxFive = 2;
        if(playingColour == col1){
        $('.box5').css('background-color', col2);    
        } else {
        $('.box5').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxThree === 2 && boxNine === 2 && boxSix === 0 && turn === false){
        setTimeout(function(){
        boxSix = 2;
        if(playingColour == col1){
        $('.box6').css('background-color', col2);    
        } else {
        $('.box6').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxOne === 2 && boxNine === 2 && boxFive === 0 && turn === false){
        setTimeout(function(){
        boxFive = 2;
        if(playingColour == col1){
        $('.box5').css('background-color', col2);    
        } else {
        $('.box5').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxThree === 2 && boxSeven === 2 && boxFive === 0 && turn === false){
        setTimeout(function(){
        boxFive = 2;
        if(playingColour == col1){
        $('.box5').css('background-color', col2);    
        } else {
        $('.box5').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
//    ----------------------START OF DEFENSIVE TURNS-------------------------------------------
    
        else if(boxOne === 1 && boxTwo === 1 && boxThree === 0 && turn === false){
        setTimeout(function(){
        boxThree = 2;
        if(playingColour == col1){
        $('.box3').css('background-color', col2);    
        } else {
        $('.box3').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxTwo === 1 && boxThree === 1 && boxOne === 0 && turn === false){
        setTimeout(function(){
        boxOne = 2;
        if(playingColour == col1){
        $('.box1').css('background-color', col2);    
        } else {
        $('.box1').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxFour === 1 && boxFive === 1 && boxSix === 0 && turn === false){
        setTimeout(function(){
        boxSix = 2;
        if(playingColour == col1){
        $('.box6').css('background-color', col2);    
        } else {
        $('.box6').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxFive === 1 && boxSix === 1 && boxFour === 0 && turn === false){
        setTimeout(function(){
        boxFour = 2;
        if(playingColour == col1){
        $('.box4').css('background-color', col2);    
        } else {
        $('.box4').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxSeven === 1 && boxEight === 1 && boxNine === 0 && turn === false){
        setTimeout(function(){
        boxNine = 2;
        if(playingColour == col1){
        $('.box9').css('background-color', col2);    
        } else {
        $('.box9').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxEight === 1 && boxNine === 1 && boxSeven === 0 && turn === false){
        setTimeout(function(){
        boxSeven = 2;
        if(playingColour == col1){
        $('.box7').css('background-color', col2);    
        } else {
        $('.box7').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxOne === 1 && boxFour === 1 && boxSeven === 0 && turn === false){
        setTimeout(function(){
        boxSeven = 2;
        if(playingColour == col1){
        $('.box7').css('background-color', col2);    
        } else {
        $('.box7').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxSeven === 1 && boxFour === 1 && boxOne === 0 && turn === false){
        setTimeout(function(){
        boxOne = 2;
        if(playingColour == col1){
        $('.box1').css('background-color', col2);    
        } else {
        $('.box1').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxTwo === 1 && boxFive === 1 && boxEight === 0 && turn === false){
        setTimeout(function(){
        boxEight = 2;
        if(playingColour == col1){
        $('.box8').css('background-color', col2);    
        } else {
        $('.box8').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxEight === 1 && boxFive === 1 && boxTwo === 0 && turn === false){
        setTimeout(function(){
        boxTwo = 2;
        if(playingColour == col1){
        $('.box2').css('background-color', col2);    
        } else {
        $('.box2').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxThree === 1 && boxSix === 1 && boxNine === 0 && turn === false){
        setTimeout(function(){
        boxNine = 2;
        if(playingColour == col1){
        $('.box9').css('background-color', col2);    
        } else {
        $('.box9').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxNine === 1 && boxSix === 1 && boxThree === 0 && turn === false){
        setTimeout(function(){
        boxThree = 2;
        if(playingColour == col1){
        $('.box3').css('background-color', col2);    
        } else {
        $('.box3').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxOne === 1 && boxFive === 1 && boxNine === 0 && turn === false){
        setTimeout(function(){
        boxNine = 2;
        if(playingColour == col1){
        $('.box9').css('background-color', col2);    
        } else {
        $('.box9').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxNine === 1 && boxFive === 1 && boxOne === 0 && turn === false){
        setTimeout(function(){
        boxOne = 2;
        if(playingColour == col1){
        $('.box1').css('background-color', col2);    
        } else {
        $('.box1').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxThree === 1 && boxFive === 1 && boxSeven === 0 && turn === false){
        setTimeout(function(){
        boxSeven = 2;
        if(playingColour == col1){
        $('.box7').css('background-color', col2);    
        } else {
        $('.box7').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxSeven === 1 && boxFive === 1 && boxThree === 0 && turn === false){
        setTimeout(function(){
        boxThree = 2;
        if(playingColour == col1){
        $('.box3').css('background-color', col2);    
        } else {
        $('.box3').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxOne === 1 && boxThree === 1 && boxTwo === 0 && turn === false){
        setTimeout(function(){
        boxTwo = 2;
        if(playingColour == col1){
        $('.box2').css('background-color', col2);    
        } else {
        $('.box2').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxFour === 1 && boxSix === 1 && boxFive === 0 && turn === false){
        setTimeout(function(){
        boxFive = 2;
        if(playingColour == col1){
        $('.box5').css('background-color', col2);    
        } else {
        $('.box5').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxSeven === 1 && boxNine === 1 && boxEight === 0 && turn === false){
        setTimeout(function(){
        boxEight = 2;
        if(playingColour == col1){
        $('.box8').css('background-color', col2);    
        } else {
        $('.box8').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxOne === 1 && boxSeven === 1 && boxFour === 0 && turn === false){
        setTimeout(function(){
        boxFour = 2;
        if(playingColour == col1){
        $('.box4').css('background-color', col2);    
        } else {
        $('.box4').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxTwo === 1 && boxEight === 1 && boxFive === 0 && turn === false){
        setTimeout(function(){
        boxFive = 2;
        if(playingColour == col1){
        $('.box5').css('background-color', col2);    
        } else {
        $('.box5').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxThree === 1 && boxNine === 1 && boxSix === 0 && turn === false){
        setTimeout(function(){
        boxSix = 2;
        if(playingColour == col1){
        $('.box6').css('background-color', col2);    
        } else {
        $('.box6').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxOne === 1 && boxNine === 1 && boxFive === 0 && turn === false){
        setTimeout(function(){
        boxFive = 2;
        if(playingColour == col1){
        $('.box5').css('background-color', col2);    
        } else {
        $('.box5').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxThree === 1 && boxSeven === 1 && boxFive === 0 && turn === false){
        setTimeout(function(){
        boxFive = 2;
        if(playingColour == col1){
        $('.box5').css('background-color', col2);    
        } else {
        $('.box5').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
//    ----------------------START OF WIN-MOVE BUILDERS TURNS-------------------------------------------
    
        else if(boxOne === 2 && boxTwo === 0 && boxThree === 0 && turn === false){
        setTimeout(function(){
        boxTwo = 2;
        if(playingColour == col1){
        $('.box2').css('background-color', col2);    
        } else {
        $('.box2').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxTwo === 2 && boxThree === 0 && boxOne === 0 && turn === false){
        setTimeout(function(){
        boxThree = 2;
        if(playingColour == col1){
        $('.box3').css('background-color', col2);    
        } else {
        $('.box3').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxFour === 2 && boxFive === 0 && boxSix === 0 && turn === false){
        setTimeout(function(){
        boxFive = 2;
        if(playingColour == col1){
        $('.box5').css('background-color', col2);    
        } else {
        $('.box5').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxFive === 2 && boxSix === 0 && boxFour === 0 && turn === false){
        setTimeout(function(){
        boxSix = 2;
        if(playingColour == col1){
        $('.box6').css('background-color', col2);    
        } else {
        $('.box6').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxSeven === 2 && boxEight === 0 && boxNine === 0 && turn === false){
        setTimeout(function(){
        boxEight = 2;
        if(playingColour == col1){
        $('.box8').css('background-color', col2);    
        } else {
        $('.box8').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxEight === 2 && boxNine === 0 && boxSeven === 0 && turn === false){
        setTimeout(function(){
        boxNine = 2;
        if(playingColour == col1){
        $('.box9').css('background-color', col2);    
        } else {
        $('.box9').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxOne === 2 && boxFour === 0 && boxSeven === 0 && turn === false){
        setTimeout(function(){
        boxFour = 2;
        if(playingColour == col1){
        $('.box4').css('background-color', col2);    
        } else {
        $('.box4').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxSeven === 2 && boxFour === 0 && boxOne === 0 && turn === false){
        setTimeout(function(){
        boxFour = 2;
        if(playingColour == col1){
        $('.box4').css('background-color', col2);    
        } else {
        $('.box4').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxTwo === 2 && boxFive === 0 && boxEight === 0 && turn === false){
        setTimeout(function(){
        boxFive = 2;
        if(playingColour == col1){
        $('.box5').css('background-color', col2);    
        } else {
        $('.box5').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxEight === 2 && boxFive === 0 && boxTwo === 0 && turn === false){
        setTimeout(function(){
        boxFive = 2;
        if(playingColour == col1){
        $('.box5').css('background-color', col2);    
        } else {
        $('.box5').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxThree === 2 && boxSix === 0 && boxNine === 0 && turn === false){
        setTimeout(function(){
        boxSix = 2;
        if(playingColour == col1){
        $('.box6').css('background-color', col2);    
        } else {
        $('.box6').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxNine === 2 && boxSix === 0 && boxThree === 0 && turn === false){
        setTimeout(function(){
        boxSix = 2;
        if(playingColour == col1){
        $('.box6').css('background-color', col2);    
        } else {
        $('.box6').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxOne === 2 && boxFive === 0 && boxNine === 0 && turn === false){
        setTimeout(function(){
        boxFive = 2;
        if(playingColour == col1){
        $('.box5').css('background-color', col2);    
        } else {
        $('.box5').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxNine === 2 && boxFive === 0 && boxOne === 0 && turn === false){
        setTimeout(function(){
        boxFive = 2;
        if(playingColour == col1){
        $('.box5').css('background-color', col2);    
        } else {
        $('.box5').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxThree === 2 && boxFive === 0 && boxSeven === 0 && turn === false){
        setTimeout(function(){
        boxFive = 2;
        if(playingColour == col1){
        $('.box5').css('background-color', col2);    
        } else {
        $('.box5').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxSeven === 2 && boxFive === 0 && boxThree === 0 && turn === false){
        setTimeout(function(){
        boxFive = 2;
        if(playingColour == col1){
        $('.box5').css('background-color', col2);    
        } else {
        $('.box5').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
//    ----------------------START OF INITIAL/STALEMATE TURNS-------------------------------------------
    
        else if(boxFive === 0 && turn === false){
        setTimeout(function(){
        boxFive = 2;
        if(playingColour == col1){
        $('.box5').css('background-color', col2);    
        } else {
        $('.box5').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxOne === 0 && turn === false){
        setTimeout(function(){
        boxOne = 2;
        if(playingColour == col1){
        $('.box1').css('background-color', col2);    
        } else {
        $('.box1').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxTwo === 0 && turn === false){
        setTimeout(function(){
        boxTwo = 2;
        if(playingColour == col1){
        $('.box2').css('background-color', col2);    
        } else {
        $('.box2').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        } 
    
        else if(boxThree === 0 && turn === false){
        setTimeout(function(){
        boxThree = 2;
        if(playingColour == col1){
        $('.box3').css('background-color', col2);    
        } else {
        $('.box3').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        } 
        else if(boxFour === 0 && turn === false){
        setTimeout(function(){
        boxFour = 2;
        if(playingColour == col1){
        $('.box4').css('background-color', col2);    
        } else {
        $('.box4').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        } 
    
        else if(boxSix === 0 && turn === false){
        setTimeout(function(){
        boxSix = 2;
        if(playingColour == col1){
        $('.box6').css('background-color', col2);    
        } else {
        $('.box6').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        } 
    
        else if(boxSeven === 0 && turn === false){
        setTimeout(function(){
        boxSeven = 2;
        if(playingColour == col1){
        $('.box7').css('background-color', col2);    
        } else {
        $('.box7').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxEight === 0 && turn === false){
        setTimeout(function(){
        boxEight = 2;
        if(playingColour == col1){
        $('.box8').css('background-color', col2);    
        } else {
        $('.box8').css('background-color', col1);     
        }
        CheckAIWin();    
        turn = true;     
        }, 2000);
        }
    
        else if(boxNine === 0 && turn === false){
        setTimeout(function(){
        boxNine = 2;
        if(playingColour == col1){
        $('.box9').css('background-color', col2);    
        } else {
        $('.box9').css('background-color', col1);     
        }
        CheckAIWin();  
        turn = true;     
        }, 2000);
        }
    
        else {
            CheckAIWin();
            console.log('Moves Depleted Sir!');
        }
}    
    
});