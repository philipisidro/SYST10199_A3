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
            console.log('correct answer was chosen');
            score++;
            scoreContainer.innerHTML = score;            
        }else {
            console.log('wrong answer was chosen');
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

    buttons.forEach(el, () => {
        el.classList.add('hide');
    });
    
    questionList[currentQuestion].answers.forEach(el, () =>{
        
    });
    currentQuestion += 1;
  
    buttons[0].classList.remove('hide');
    buttons[1].classList.remove('hide');
    buttons[2].classList.remove('
    buttons[3].classList.remove('hide');
};
