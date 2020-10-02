$(function (){
                localStorage.score = 0;
                totalAnswers = 0;
                opponentScoreA = Math.floor(Math.random() * 200);
                opponentScoreB = Math.floor(Math.random() * 200);
                
                //display instructions container
                $('#help').on('click', function(){
                    $('#instructions').slideToggle(1000);
                    $('#hide').click(function (){
                      $('#instructions').slideUp(1000);
                    })
                });
                
                //generate random numbers
                function generateNumbers(){
                    randomNumberX = Math.floor(Math.random() * 25);
                    randomNumberY = Math.floor(Math.random() * 25);
                    rightAnswer = randomNumberX + randomNumberY;
                    
                    $('#questionContainer').text(`${randomNumberX} + ${randomNumberY}`)
                }
                
                function showResults(){
                    $('#results').fadeIn(3000);
                    $('#feedback').slideDown(4000);
                    $('footer').fadeIn(100);
                }
                
                $('#start-btn').on('click', function() {
                    $('#instructions').slideUp(1000);
                    $('#welcome').fadeOut(500);
                    $('footer').fadeOut(500);
                    $('#feedback').fadeOut(500);
                    generateNumbers();
                    totalAttempts = 1;
                    
                    $(this).text('Next');
                    $('#task-container').fadeIn();
                    $(this).hide();
                    $(this).off('click');
                    
                    let duration = 61;
                    let timeInterval = setInterval(time, 1000);
                    
                    function time(){
                        if(duration !== 0){
                            duration--;
                            $('#timeMark').fadeIn(100);
                            $('#timeMark').text(duration);
                        }else{
                            $('#timeMark').text('Time Is Up!');
                            $('#timeMark').fadeIn(4000, function(){
                            $('#timeMark').fadeOut(3000);
                        });
                            $('#task-container').fadeOut(10);
                            $('#userScore').text(localStorage.score);
                            $('#yourScore').text(localStorage.score);
                            $('#opponentScoreA').html('Steven Got: <br> ' + opponentScoreA + '%');
                            $('#opponentScoreB').html('Leonard Got: <br> ' + opponentScoreB + '%');
                            $('#totalAnswers').text(totalAnswers);
                            $('#totalAttempts').text(totalAttempts);
                            clearInterval(timeInterval);
                            showResults();
                           // alert(totalAttempts);
                        }
                    }
                });
                
                $('#next-btn').on('click', function(){
                    totalAttempts = totalAttempts + 1;
                    answer = $('input').val();
                    $('input').val('');
                    
                    if(answer == rightAnswer){
                        localStorage.score = parseInt(localStorage.score) + 5;
                        totalAnswers++;
                        generateNumbers();
                    }else{
                        $('#wrongMark').text('Wrong!');
                        generateNumbers();
                        $('#wrongMark').fadeIn(50, function(){
                            $('#wrongMark').fadeOut(1000);
                        });
                    }
                });
            })