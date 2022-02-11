const buttons = document.querySelectorAll('#answerButtons button');
const questionContainer = document.getElementById('questionContainer');
const question = document.getElementById('question');
const startButton = document.getElementById('startButton');
const continueButton = document.getElementById('continue');
const scoreContainer = document.getElementById('score');

const questionList = 

startButton.addEventListener('click', () => {

    startButton.classList.add('hide');
    questionContainer.classList.remove('hide');
    
    setQuestion();
    
})

buttons.forEach(el => {
    el.addEventListener('click', () => {
        if(el.classList.contains('correct')){
            console.log('correct answer was chosen');
            score++;
            scoreContainer.innerHTML = score;            
        }else {
            console.log('wrong answer was chosen')
        }
        continueButton.classList.remove('hide');
    });
})

continueButton.addEventListener('click', () => {
    buttons.forEach(el => {
        el.classList.remove('correct');
    });
    setQuestion();
})

function setQuestion(){

    buttons.forEach(el => {
        el.classList.add('hide');
    });

    let randomQuestion = questionList[Math.floor(Math.random() * questionList.length)];

    question.innerHTML = randomQuestion.q;
    
    let i = 0;
    randomQuestion.answers.forEach(el => {
        buttons[i].innerHTML = randomQuestion.answers[i].a;
        buttons[i].classList.remove('hide');
        if (randomQuestion.answers[i].correct){
            buttons[i].classList.add('correct');
        }
        i++;
    })    
}

