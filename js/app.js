const buttons = document.querySelectorAll('#answerButtons button');
const questionContainer = document.getElementById('questionContainer');
const question = document.getElementById('question');
const startButton = document.getElementById('startButton');
const continueButton = document.getElementById('continue');
const scoreContainer = document.getElementById('score');
const shuffledQuestionsList = [];
let score = 0;

startButton.addEventListener('click', () => {
    startButton.classList.add('hide');
    questionContainer.classList.remove('hide');
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

const testbtn = document.getElementById('testbtn');

testbtn.addEventListener('click', ()=> shuffleQuestion());

function shuffleQuestion(){
    let max = questionList.length-1;
    // console.log(questionList[randomNumber]);
    for (let i = 0; i < questionList.length; i++){
        
        randomNumber = Math.floor(Math.random() * max);
        el = questionList[randomNumber]; 
        
        shuffledQuestionsList.forEach(el => {
            do {
            } while (questionList[randomNumber] = el);
        });
        shuffledQuestionsList[i] = questionList[randomNumber] ;
    }
    console.log(shuffledQuestionsList);
    // questionList.forEach(el => { 
    //     let randomNumber = Math.floor(Math.random() * max);
    //     for (let i = 0; i < questionList.length; i++){
    //         shuffledQuestionsList.forEach(el => {
    //             if (shuffledQuestionsList[i] == question[randomNumber]){
    //                 shuffledQuestionsList[i] = question[randomNumber];
    //             };
    //         });
    //     };
    //     console.log(question[randomNumber]); 
    // });
    // console.log(shuffledQuestionsList);
};

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
    });
};
