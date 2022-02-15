const buttons = document.querySelectorAll('#answerButtons button');
const questionContainer = document.getElementById('questionContainer');
const question = document.getElementById('question');
const startButton = document.getElementById('startButton');
const continueButton = document.getElementById('continue');
const scoreContainer = document.getElementById('score');
let score = 0;
let currentQuestion = 0;

startButton.addEventListener('click', () => {
    startButton.classList.add('hide'); //hides the start button
    shuffleQuestion(); //shuffles the questions
    questionContainer.classList.remove('hide'); //shows the quesiton container
    setQuestion();
});

buttons.forEach(el => {
    el.addEventListener('click', () => {
        if(el.classList.contains('correct')){
            el.classList.add('rightAnswer')
            score++;
            scoreContainer.innerHTML = score;            
        }else {
            el.classList.add('wrongAnswer');
        };
        continueButton.classList.remove('hide');
    });
});

continueButton.addEventListener('click', () => {
    continueButton.classList.add('hide');
    buttons.forEach(el => {
        el.classList.remove('correct');
    });
    setQuestion();
});

function shuffleQuestion(){
    let currentIndex = questionList.length, shuffledQuestionsList;
    
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        
        [questionList[currentIndex], questionList[randomIndex]] = [questionList[randomIndex], questionList[currentIndex]] 
    };
};

function setQuestion(){

    buttons.forEach(el => {
        el.classList.add('hide');
    });
    
    let i = 0;
    
    penis = questionList[currentQuestion].answers
    
    question.innerHTML = penis.question[current]
    

    penis.forEach(el =>{
        buttons[i].innerHTML = penis[i].a;
        buttons[i].classList.remove('hide');
        
        if (penis[i].correct){
            buttons[i].classList.add('correct')
        }
        console.log("vulva " + i)
        
        i++;
        
        
    });
    currentQuestion += 1;
};
