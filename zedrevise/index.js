/*I am just a self taught teen coder who loves to
 learn new things, related to software/programming.
You can help me how i can improve my coding skills if
 at all you would like! email: stevenzulu123@gmail.com */

//  redirect to the latest ZedRevise
const redirect =
    confirm(`
        This is the old version of ZedRevise. You will be redirected to the newer version of ZedRevise.
    `)

if (redirect == true) {
        location.href = 'https://zedrevsie.netlify.app/'
} else {
    alert('You are using an outdated version of ZedRevise')
    }

//Essential global variables
let first_name = document.getElementById('user-firstName').value;
let firstName = localStorage.fName;
// let lastName = localStorage.lName;
let question = document.getElementsByClassName('question');
let x = document.getElementsByClassName('timer');
let scoreRecord = document.getElementById('score');
localStorage.score = 0;

//check if user is registered
function checkUser(){
    if(firstName != null){
       document.getElementById('first-page').style.display = 'none';
       document.getElementById('loading').style.display = 'none';
       document.getElementById('home-container').style.display = 'block';
       document.getElementById('registeredAdmin').innerHTML = firstName;
       document.getElementById('welcome-user').innerHTML = 'Hello, ' + firstName + '!';
       
    }else{
       document.getElementById('loading').style.display = 'none';
       document.getElementById('first-page').style.display = 'block';
    }
}


//getting data from inputs
function logIn(){
     first_name = document.getElementById('user-firstName').value;
     // let last_name = document.getElementById('user-lastName').value;
     let error = document.getElementById('errorLogIn');
     document.getElementById('registeredAdmin').innerHTML = first_name;
     
     //remove whitespace from input
     first_name = first_name.trim();
     // last_name = last_name.trim();
    
    //short first name
    if(first_name.length <= 3 || first_name === ''){
        error.innerHTML = 'Please enter a valid <u>First Name</u> ';
        
        //short last name
    }else {
        
        //store entered data
        localStorage.fName = first_name;
        // localStorage.lname = last_name;
        
        document.getElementById('welcome-user').innerHTML  = 'Welcome ' + first_name;
        document.getElementById('registeredAdmin').innerHTML = first_name;
        document.getElementById('first-page').style.display = 'none';
        document.getElementById('home-container').style.display = 'block';
    }
}

//logging out
function logOut(){
    localStorage.clear()
}

//Starting quiz - question 1
function startQuiz(){
    question[0].style.display = 'block';
    document.getElementById('quiz-overview').style.display = 'none';
    
    let time = 16;
    let stopTimer = setInterval(timer, 1000);
    
    //Count down timer for question 1
    function timer(){
        if(time !== 0){
            time--;
            x[0].innerHTML = time;
        }else if(time == 0){
            clearInterval(stopTimer);
            question2()
         }else{
            clearInterval(stopTimer);
            question2();
        }
        
        
           
  
          }
    }

//Question 2
function question2(){
    //get answer for question 1
    let ans = document.getElementsByClassName('ans1');
    if(ans[0].checked == true){
        localStorage.score = parseInt(localStorage.score) + 5;
        question[0].style.display = 'none';
        question[1].style.display = 'block';
    }else{
        question[0].style.display = 'none';
        question[1].style.display = ' block';
        }
  
    //hide quesrion 1 & show quesrion 2
    question[0].style.display = 'none';
    question[1].style.display = 'block';
    
   
    let time = 21;
    let stopTimer = setInterval(timer, 1000);
    
    //Count down timer for question 2
    function timer(){
        if(time !== 0){
            time--;
            x[1].innerHTML = time;
        }else if(time == 0){
            clearInterval(stopTimer);
            question[1].style.display = 'none';
            question3();
        }else{
            question[1].style.display = 'none';
            question3();
        }
    }
    
}


//Question3
function question3(){
    question[1].style.display = 'none';
    question[2].style.display = 'block';
    
    //get answer for question 2
    let ans2 = document.getElementsByClassName('ans2');
    if(ans2[2].checked == true){
        localStorage.score = parseInt(localStorage.score) + 5;
        }
    
    
    //Count down timer for question 3
    let stopTimer = setInterval(timer, 1000);
    let time = 26;
    
    function timer(){
        if(time !== 0){
            time--;
            x[2].innerHTML = time ;
        }else if(time == 0){
            clearInterval(stopTimer);
            question[2].style.display = 'none';
            question4();
        }else{
            question[2].style.display = 'none';
            question4();
        }
    }
    
}


function question4(){
    
    //get question 3 answer
    let ans3 = document.getElementsByClassName('ans3');
    if(ans3[3].checked == true){
        localStorage.score = parseInt(localStorage.score) + 5;
    }
    
    question[2].style.display = 'none';
    question[3].style.display = 'block';
    
    //Count down timer for question 4
    let stopTimer = setInterval(timer, 1000);
    let time = 21;
    
    function timer(){
        if(time !== 0){
            time--;
            x[3].innerHTML = time;
        }else if(time == 0){
            clearInterval(stopTimer);
            question[3].style.display = 'none';
            question5();
        }else{
            question[3].style.display = 'none';
            question5();
        }
    }
}

//question 5
function question5(){
    //get answer to question 4
    let ans4 = document.getElementsByClassName('ans4');
    if(ans4[1].checked == true){
        localStorage.score = parseInt(localStorage.score) + 5;
    }
    
    question[3].style.display = 'none';
    question[4].style.display = 'block';
    
    //Count down timer for question 5
    let stopTimer = setInterval(timer, 1000);
    let time = 51;
    
    function timer(){
        if(time !== 0){
            time--;
            x[4].innerHTML = time;
        }else{
            clearInterval(stopTimer);
            question[4].style.display = 'none';
            question6();
        }
    }
}


function question6(){
    //get answer to question 5
    let ans5 = document.getElementsByClassName('ans5');
    if(ans5[3].checked == true){
        localStorage.score = parseInt(localStorage.score) + 5;
    }
    
    question[4].style.display = 'none';
    question[5].style.display = 'block';
    
    //Count down timer for question 6
    let stopTimer = setInterval(timer, 1000);
    let time = 15;
    
    function timer(){
        if(time !== 0){
            time--;
            x[5].innerHTML = time;
        }else{
            clearInterval(stopTimer);
            question[5].style.display = 'none';
            question7();
        }
    }
}

//question 7
function question7(){
    //get answer to question 6
    let ans6 = document.getElementsByClassName('ans6');
    if(ans6[2].checked == true){
        localStorage.score = parseInt(localStorage.score) + 5;
    }
    
    question[5].style.display = 'none';
    question[6].style.display = 'block';
    
    //Count down timer for question 7
    let stopTimer = setInterval(timer, 1000);
    let time = 21;
    
    function timer(){
        if(time !== 0){
            time--;
            x[6].innerHTML = time;
        }else{
            clearInterval(stopTimer);
            question[6].style.display = 'none';
            question8();
        }
    }
}


//question 8
function question8(){
    //get answer to question 7
    let ans7 = document.getElementsByClassName('ans7');
    if(ans7[3].checked == true){
        localStorage.score = parseInt(localStorage.score) + 5;
    }
    
    question[6].style.display = 'none';
    question[7].style.display = 'block';
    
    //Count down timer for question 8
    let stopTimer = setInterval(timer, 1000);
    let time = 41;
   
    function timer(){
        if(time !== 0){
            time--;
            x[7].innerHTML = time;
        }else{
            clearInterval(stopTimer);
            question[7].style.display = 'none';
            question9();
        }
    }
}

//question 9
function question9(){
	//get answer to question 8
    let ans8 = document.getElementsByClassName('ans8');
    if(ans8[2].checked == true){
        localStorage.score = parseInt(localStorage.score) + 5;
    }
    
    question[7].style.display = 'none';
    question[8].style.display = 'block';
    
    //Count down timer for question 9
    let stopTimer = setInterval(timer, 	1000);
    let time = 21;
   
    function timer(){
        if(time !== 0){
            time--;
            x[8].innerHTML = time;
        }else{
            clearInterval(stopTimer);
            question[8].style.display = 'none';
            question10();
        }
    }
}

//question 10
function question10(){
	//get answer to question 9
    let ans9 = document.getElementsByClassName('ans9');
    if(ans9[0].checked == true){
        localStorage.score = parseInt(localStorage.score) + 5;
    }
    
    question[8].style.display = 'none';
    question[9].style.display = 'block';
    
    //Count down timer for question 10
    let stopTimer = setInterval(timer, 	1000);
    let time = 26;
   
    function timer(){
        if(time !== 0){
            time--;
            x[9].innerHTML = time;
        }else{
            clearInterval(stopTimer);
            question[9].style.display = 'none';
            quizBreak();
        }
    }
}

//pausing quiz for a break.
function quizBreak(){
	//get answer to question 10
	let ans10 = document.getElementsByClassName('ans10');
	if(ans10[1].checked == true){
		localStorage.score = parseInt(localStorage.score) + 5;
	}
	
	scoreRecord.innerHTML = 'You Got ' + localStorage.score + '% Out Of 50% In The First 10 Questions!';
	document.getElementById('quizBreak').style.display = 'block';
	document.getElementById('quiz-container').style.display ='none';
}

//question 11
function question11(){
	document.getElementById('quizBreak').style.display = 'none';
	document.getElementById('quiz-container').style.display ='block';
	
	question[10].style.display = 'block';
	
	//Count down timer for question 11
    let stopTimer = setInterval(timer, 	1000);
    let time = 31;
   
    function timer(){
        if(time !== 0){
            time--;
            x[10].innerHTML = time;
        }else{
            clearInterval(stopTimer);
            question[10].style.display = 'none';
            question12();
        }
    }
	
}

//question 12
function question12(){
    //get answer to question 11
	let ans11 = document.getElementsByClassName('ans11');
	if(ans11[0].checked == true){
		localStorage.score = parseInt(localStorage.score) + 5;
	}
	
	//display question 12
	question[11].style.display = 'block';
	
	//Count down timer for question 12
    let stopTimer = setInterval(timer, 	1000);
    let time = 21;
   
    function timer(){
        if(time !== 0){
            time--;
            x[11].innerHTML = time;
        }else{
            clearInterval(stopTimer);
            question[11].style.display = 'none';
            question13();
        }
    }
}

//question 13
function question13(){
    //get answer to question 12
	let ans12 = document.getElementsByClassName('ans12');
	if(ans12[3].checked == true){
		localStorage.score = parseInt(localStorage.score) + 5;
	}
	
	//display question 13
	question[12].style.display = 'block';
	
	//Count down timer for question 13
    let stopTimer = setInterval(timer, 	1000);
    let time = 21;
   
    function timer(){
        if(time !== 0){
            time--;
            x[12].innerHTML = time;
        }else{
            clearInterval(stopTimer);
            question[12].style.display = 'none';
            question14();
        }
    }
}

//question 14
function question14(){
    //get answer to question 13
	let ans13 = document.getElementsByClassName('ans13');
	if(ans13[2].checked == true){
		localStorage.score = parseInt(localStorage.score) + 5;
	}
	
	//display question 14
	question[13].style.display = 'block';
	
	//Count down timer for question 14
    let stopTimer = setInterval(timer, 	1000);
    let time = 26;
   
    function timer(){
        if(time !== 0){
            time--;
            x[13].innerHTML = time;
        }else{
            clearInterval(stopTimer);
            question[13].style.display = 'none';
            question15();
        }
    }
}

//question 15
function question15(){
    //get answer to question 14
	let ans14 = document.getElementsByClassName('ans14');
	if(ans14[1].checked == true){
		localStorage.score = parseInt(localStorage.score) + 5;
	}
	
	//display question 15
	question[14].style.display = 'block';
	
	//Count down timer for question 15
    let stopTimer = setInterval(timer, 	1000);
    let time = 16;
   
    function timer(){
        if(time !== 0){
            time--;
            x[14].innerHTML = time;
        }else{
            clearInterval(stopTimer);
            question[14].style.display = 'none';
            question16();
        }
    }
}

//question 16
function question16(){
    //get answer to question 15
	let ans15 = document.getElementsByClassName('ans15');
	if(ans15[1].checked == true){
		localStorage.score = parseInt(localStorage.score) + 5;
	}
	
	//display question 16
	question[15].style.display = 'block';
	
	//Count down timer for question 16
    let stopTimer = setInterval(timer, 	1000);
    let time = 16;
   
    function timer(){
        if(time !== 0){
            time--;
            x[15].innerHTML = time;
        }else{
            clearInterval(stopTimer);
            question[15].style.display = 'none';
            question17();
        }
    }
}

//question 17
function question17(){
    //get answer to question 16
	let ans16 = document.getElementsByClassName('ans16');
	if(ans16[3].checked == true){
		localStorage.score = parseInt(localStorage.score) + 5;
	}
	
	//display question 17
	question[16].style.display = 'block';
	
	//Count down timer for question 17
    let stopTimer = setInterval(timer, 	1000);
    let time = 21;
   
    function timer(){
        if(time !== 0){
            time--;
            x[16].innerHTML = time;
        }else{
            clearInterval(stopTimer);
            question[16].style.display = 'none';
            question18();
        }
    }
}

//question 18
function question18(){
    //get answer to question 17
	let ans17 = document.getElementsByClassName('ans17');
	if(ans17[0].checked == true){
		localStorage.score = parseInt(localStorage.score) + 5;
	}
	
	//display question 18
	question[17].style.display = 'block';
	
	//Count down timer for question 18
    let stopTimer = setInterval(timer, 	1000);
    let time = 21;
   
    function timer(){
        if(time !== 0){
            time--;
            x[17].innerHTML = time;
        }else{
            clearInterval(stopTimer);
            question[17].style.display = 'none';
            question19();
        }
    }
}

//question 19
function question19(){
    //get answer to question 18
	let ans18 = document.getElementsByClassName('ans18');
	if(ans18[2].checked == true){
		localStorage.score = parseInt(localStorage.score) + 5;
	}
	
	//display question 19
	question[18].style.display = 'block';
	
	//Count down timer for question 19
    let stopTimer = setInterval(timer, 	1000);
    let time = 15;
   
    function timer(){
        if(time !== 0){
            time--;
            x[18].innerHTML = time;
        }else{
            clearInterval(stopTimer);
            question[18].style.display = 'none';
            question20();
        }
    }
}


//question 20
function question20(){
    //get answer to question 19
	let ans19 = document.getElementsByClassName('ans19');
	if(ans19[2].checked == true){
		localStorage.score = parseInt(localStorage.score) + 5;
	}
	
	//display question 20
	question[19].style.display = 'block';
	
	//Count down timer for question 20
    let stopTimer = setInterval(timer, 	1000);
    let time = 26;
   
    function timer(){
        if(time !== 0){
            time--;
            x[19].innerHTML = time;
        }else{
            clearInterval(stopTimer);
            question[19].style.display = 'none';
            loadingResults();
        }
    }
}

//final results 
function loadingResults(){
    //get answer to question 20
	let ans20 = document.getElementsByClassName('ans20');
	if(ans20[3].checked == true){
		localStorage.score = parseInt(localStorage.score) + 5;
	}
	
    // display rrsults loader
    document.getElementById('resultsLoader').style.display = 'block';
    
    //Count down animation!
    let width = -1;
    let loadingTime = setInterval(loader, 120);
    let loading = document.getElementById('loading_results');
    
    function loader(){
        if(width !== 100){
            width++;
            loading.style.width = width + '%';
            loading.style.textAlign = 'center';
            
        }else{
            document.getElementById('lrph').innerHTML = 'Your Results Are Ready!';
            document.getElementById('lrph').style.color = '#0FA41B';
            document.getElementById('lrph').style.fontFamily = 'monospace';
            document.getElementById('lrph').style.fontSize = 'large';
            document.getElementById('srb').style.display = 'block';
            clearInterval(loadingTime);
        }
    }
}

function showResults(){
    document.getElementById('resultsLoader').style.display = 'none';
    document.getElementById('finalResults').style.display = 'block';
    let finalScore = document.getElementById('finalScore');
    finalScore.innerHTML = localStorage.score + '<sub>%</sub>';
}