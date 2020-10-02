$(function (){
    $('#submit-1').click(function (){
        let remainingDays = $('#remaining-days').val();
        let numberOfSubjects = $('#number-of-subjects').val();
        
        // convert to int data type and devide
        daysPerSubject = Math.round( parseInt(remainingDays) / parseInt(numberOfSubjects) );
        
        if(remainingDays !== '' && numberOfSubjects !== ''){
            $('#r-days').html(remainingDays);
            $('#subjects').html(numberOfSubjects);
            $('#days-per-subject').html(daysPerSubject);
            $('#plan-suggestions').slideDown(3000);
        }
    })
    
    $('#submit-2').click(function (){
        let subjectName = $('#subject').val();
        let numberOfTopics = $('#topics').val();
        
        if(subjectName !== '' && numberOfTopics !== '' ){
            $('#results-2').fadeIn(2000);
            let topicsPerDay = parseInt(numberOfTopics) / daysPerSubject;
            topicsPerDay = topicsPerDay.toFixed(1);
            // if(topicsPerDay === 0){topicsPerDay++};
            
           $('#t-topics').html(topicsPerDay);
           $('#subject-name').html(subjectName);
           $('#days-p-subject').html(daysPerSubject);
       }
    })
})