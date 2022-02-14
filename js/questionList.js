const questionList = [

    {
        q: "What is 2 + 2?",
        answers: [
            {a:"2", correct: false}, 
            {a: "4", correct: true}, 
            {a: "5", correct: false},
            {a: "6", correct: false}
        ]
    },
    {
        q: "Who is your Twice bias?",
        answers: [
            {a:"Sana", correct: false}, 
            {a: "Mina", correct: true}, 
            {a: "↗️", correct: false},
            {a: "⬆️", correct: false}
        ]
    },
    {
        q: "What is the capital of Canada?",
        answers: [
            {a:"Brampton", correct: false}, 
            {a: "Downtown Canada", correct: false}, 
            {a: "Ottawa", correct: true},
            {a: "Vancouver", correct: false}
        ]
    },
    {
        q: "Who was the first Preministor of Canada?",
        answers: [
            {a:"John A Macdonalod", correct: true}, 
            {a: "Richard Nixon", correct: false}, 
            {a: "Casper the friendly Ghose", correct: false},
            {a: "Pieere Treadeau", correct: false}
        ]
    },
    {
        q: "How many states of Matter Are There",
        answers: [
            {a:"5", correct: false}, 
            {a: "3", correct: true}, 

        ]
    }
]

console.log(question[1].answers[1].a)