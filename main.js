function check(){
var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;
var question5 = document.quiz.question5.value;
var correct = 0;

    if (question1 == "Hyper Text Markup Language"){
     
     correct++;
    }

    if (question2 == "True"){
    
    correct++;
    }
    
     if (question3 == "th"){
    
    correct++;
    }
    
     if (question4 == "background-color"){
    
    correct++;
    }
    
     if (question5 == "False"){
    
    correct++;
    }
    
    var messages = ["You are an HTML Pro!" , "You are good at HTML." , "You are just ok at HTML." , "You need to study HTML harder!" , "You have no clue about what HTML is"];
    
    var range;
    
        if (correct < 1) {
            range = 4;
        }
        
         if (correct > 0 && < 5) {
            range = 3;
        }
        
         if (correct > 1 && < 4 ) {
            range = 2;
        }
        
         if (correct > 2 && < 3) {
            range = 1;
        }
        
         if (correct > 3) {
            range = 0;
        }
    
    
document.getElementById("after_submit").style.visibility="visible";

document.getElementById("message").innerHTML = messages[range];
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
}



}