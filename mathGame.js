var score=1;
var id_startGame    = document.querySelector("#startGame");
var id_instruction  = document.querySelector("#instruction");
var id_timeLeft     = document.querySelector("#timeLeft");
var id_resetGame    = document.querySelector("#resetGame");      
var id_question     = document.querySelector("#question");
var id_option1      = document.querySelector("#option1");
var id_option2      = document.querySelector("#option2");     
var id_option3      = document.querySelector("#option3");
var id_option4      = document.querySelector("#option4");
var id_score_span   = document.querySelector("#score span");
var id_timeLeft_span= document.querySelector("#timeLeft span");
var id_correct      = document.querySelector("#correct"); 
var id_incorrect    = document.querySelector("#incorrect");
var id_resetGame    = document.querySelector("#resetGame"); 
var id_gameOver     = document.querySelector("#gameOver");     


id_startGame.addEventListener("click",function(eventObject){
        id_startGame.style.display='none';//start game div should hide after getting clicked
        id_instruction.innerHTML= 'Click The Correct Option';          
        id_timeLeft.style.display='block';
        id_resetGame.style.display='block';

        // Q U E S T I O N   A N D   O P T I O N S   
       set();//calling options function




        function set ()
        {   
            //Generate Question to set.
            var digit1 = Math.round(10*Math.random());                        
            var digit2 = Math.round(10*Math.random());                
            var question_value = (digit1*digit2).toString();
            //put question in question box
            id_question.innerHTML= digit1+' '+'X'+' '+digit2;

            // Creating Randomness of Position Of Options By Using Math.random()
            var p = Math.random(); 
            //Generate options to set
            optionsGenerate();

            function optionsGenerate(){  
              	var x,y,z;
             	generateDifferentOptions();


             	function generateDifferentOptions(){             	    
             	    x=(Math.round(10*Math.random()) * Math.round(10*Math.random())).toString();
            	    console.log(x);
            	    y=(Math.round(10*Math.random()) * Math.round(10*Math.random())).toString();
            	    console.log(y);
            	    z=(Math.round(10*Math.random()) * Math.round(10*Math.random())).toString();
                    console.log(z);

                    if (x!==y && x!==z && y!==z) {
                     console.log('you have got different options');
                    }//end if
                    else{console.log('sorry same options so generating new options');generateDifferentOptions();}
                  
                }//end generateDifferentOptions();


            
            //put options in boxes according to randomness.

            if (p<0.25)         
            {               	
            	id_option1.innerHTML=question_value;
                if (x!==question_value && y!==question_value && z!==question_value) {
                  id_option2.innerHTML=x;                                        
                  id_option3.innerHTML=y;
                  id_option4.innerHTML=z;
                } else{console.log('sorry one or more of the options matched the answer so generating new options');optionsGenerate();}
                //add new event listner on correct and wrong boxes
                id_option1.addEventListener("click",processClick);//end option eventlistener.
                id_option2.addEventListener("click",incorrectClick);//end option eventlistener.
                id_option3.addEventListener("click",incorrectClick);//end option eventlistener.
                id_option4.addEventListener("click",incorrectClick);//end option eventlistener.

                // var previous_correct_option = 'id_option'+prev_correct;
                // console.log(previous_correct_option);//giving 'id_option< no.>'
                // alert(document.querySelector("#"+previous_correct_option));//but this is giving null          
            }//end first if
            else if(p>0.25 && p<0.5)
            {
            	id_option2.innerHTML=question_value;
                if (x!==question_value && y!==question_value && z!==question_value) {
                  id_option1.innerHTML=x;                                        
                  id_option3.innerHTML=y;
                  id_option4.innerHTML=z;
                } else{console.log('sorry one or more of the options matched the answer so generating new options');optionsGenerate();}                               
                
                id_option2.addEventListener("click",processClick);//end option eventlistener.
                id_option1.addEventListener("click",incorrectClick);//end option eventlistener.
                id_option3.addEventListener("click",incorrectClick);//end option eventlistener.
                id_option4.addEventListener("click",incorrectClick);//end option eventlistener.
            }//end second else if
          
            else if(p>0.5 && p<0.75)
            {
            	id_option3.innerHTML=question_value;
                if (x!==question_value && y!==question_value && z!==question_value) {
                  id_option1.innerHTML=x;                                        
                  id_option2.innerHTML=y;
                  id_option4.innerHTML=z;
                } else{console.log('sorry one or more of the options matched the answer so generating new options');optionsGenerate();}                               
                
                id_option3.addEventListener("click",processClick);//end option eventlistener.
                id_option1.addEventListener("click",incorrectClick);//end option eventlistener.
                id_option2.addEventListener("click",incorrectClick);//end option eventlistener.
                id_option4.addEventListener("click",incorrectClick);//end option eventlistener.
            }//end third elseif
          
            else 
            {
            	id_option4.innerHTML=question_value;
                if (x!==question_value && y!==question_value && z!==question_value) {
                  id_option1.innerHTML=x;                                        
                  id_option2.innerHTML=y;
                  id_option3.innerHTML=z;
                } else{console.log('sorry one or more of the options matched the answer so generating new options');optionsGenerate();}                               
                
                
                id_option4.addEventListener("click",processClick);//end option eventlistener.
                id_option1.addEventListener("click",incorrectClick);
                id_option2.addEventListener("click",incorrectClick);
                id_option3.addEventListener("click",incorrectClick);
            }//end last else                  
            
        }//end optionGenerate function  
      
      }//end S E T function
          







           function processClick(eventObject)
           {      //Increasing Score
                  id_score_span.innerHTML=score;
                  score++;
                  clearInterval(setInterval_1);//clears setInterval before setting countdown              
    
                  //Remove eventListner from element which has fired the event 
                  console.log(eventObject.target);
                  eventObject.target.removeEventListener('click',processClick);//eventObject.target gives html element that has fired the processClick eventlistner.    
                  id_option1.removeEventListener('click',incorrectClick);
                  id_option2.removeEventListener('click',incorrectClick);//one of them will not even have incorrectClick eventlistener 
                  id_option3.removeEventListener('click',incorrectClick);//added to it,but still it works 
                  id_option4.removeEventListener('click',incorrectClick);

                  //show "correct" and then hide "correct" after 2 seconds and set countDown and new question and options.
                  id_correct.style.display="block"; 
                  setTimeout(displayNone, 1200); 
                  
                   function displayNone(){ 
                   id_correct.style.display="none";//hide "correct"  

                    //Set CountDown
                    id_timeLeft_span.innerHTML='30';//then, show text 'time remaining 30 seconds'
                    countDown();//then,reset countdown ,i.e, it starts decreasing 30 by 1.                                     
                  
                    //Set New Question and options and eventlistners.
                    set();
                  
                 }//end displayNone function
                  
           }

           function incorrectClick(eventObject){
             
             id_incorrect.style.display="block";
             clearInterval(setInterval_1);//clears setInterval before setting countdown

             //Remove eventListner from element which has fired the event 
             //eventObject.target.removeEventListener('click',incorrectClick);//eventObject.target gives html element that has fired the processClick eventlistner.    
 
             setTimeout(DisplayNone, 1200);

             function DisplayNone(){
               id_incorrect.style.display="none";//hide "correct"
               
               //Set countDown.  
               id_timeLeft_span.innerHTML='30';//then, show text 'time remaining 30 seconds'
               countDown();//then,reset countdown ,i.e, it starts decreasing 30 by 1.
             
             }
          

          }






      // C O U N T D O W N 
      countDown();//calling countDown function.

      var setInterval_1;//i have to use it to clear setinterval outside this function also  
      function countDown(){
        setInterval_1=setInterval(myTimeLeft,1000);//after clicking on
        var ctr = 29;              // start game time should start
        function myTimeLeft(){                          //decreasing by 1 second until it becomes 0
          if (ctr!==0){                                   //and once it has become 0 
            id_timeLeft_span.innerHTML=ctr;  //it should not decrease more 
          }
          if(ctr===0){ 
            clearInterval(setInterval_1);                                   //and after becoming 0 ,Time out written
            id_timeLeft.innerHTML='Time Out';                           //should come

            id_gameOver.style.display= "block";
            setTimeout(function(){
              location.reload();
            },2000);
          }
          ctr--;
        }//end myTimeLeft
    
      }//end countDown function
 



    });//end startGame eventlistener.

id_resetGame.addEventListener("click",function(eventObject){
  location.reload();
});//end resetGame eventlistener.