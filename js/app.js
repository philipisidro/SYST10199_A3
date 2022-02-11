const buttons = document.querySelectorAll('#answerButtons button');
const questionContainer = document.getElementById('questionContainer');
const question = {
    question: "Who is your Twice bias?",
    answers: [
        {a:"➡️", correct: false}, 
        {a: "Mina", correct: true}, 
        {a: "↗️", correct: false},
        {a: "⬆️", correct: false}
    ]
}

document.getElementById('startButton').addEventListener('click', () => {

    question.innerHTML = question.question;
    
    let i = 0;
	let correctAnswer =; 
    question.answers.forEach(el => {
            buttons[i].innerHTML = question.answers[i].a;

            if (question.answers[i].correct == true ){					button[i].classList.add('correct');
                
            } 
            i++;
    })
    
    buttons.addEventListener('click', () => {
			if (button.contains('correct')){
				console.log("")
			}
    })
})


