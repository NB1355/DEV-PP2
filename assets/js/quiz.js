// Question source
///////////////////////get from jason upload ?!!!!!!!!!! select: ok, upload?

//Sample Structure

let questions = [{
        qRefID: "q001",
        qRefText: "Question ID: q001 - sample question for testing",
        checkbox1: "1q001 answer no.1 for question q001",
        checkbox2: "2q001 answer no.2 for question q001",
        checkbox3: "3q001 answer no.3 for question q001, correct",
        checkbox4: "4q001 answer no.4 for question q001, correct",
        correct: "24"
    },
    {
        qRefID: "q002",
        qRefText: "Question ID: q002 - sample question for testing",
        checkbox1: "1q002 answer no.1 for question q002, correct",
        checkbox2: "2q002 answer no.2 for question q002",
        checkbox3: "3q002 answer no.3 for question q002",
        checkbox4: "4q002 answer no.4 for question q002, correct",
        correct: "14"
    }, {
        qRefID: "q003",
        qRefText: "Question ID: q003 - sample question for testing",
        checkbox1: "1q003 answer no.1 for question q003",
        checkbox2: "2q003 answer no.2 for question q003, correct",
        checkbox3: "3q003 answer no.3 for question q003",
        checkbox4: "4q003 answer no.4 for question q003",
        correct: "2"
    }, {
        qRefID: "q004",
        qRefText: "Question ID: q004 - sample question for testing",
        checkbox1: "1q001 answer no.1 for question q004, correct",
        checkbox2: "2q001 answer no.2 for question q004, correct",
        checkbox3: "3q001 answer no.3 for question q004, correct",
        checkbox4: "4q001 answer no.4 for question q004, correct",
        correct: "1234"
    }, {
        qRefID: "q005",
        qRefText: "Question ID: q005 - sample question for testing",
        checkbox1: "1q005 answer no.1 for question q005",
        checkbox2: "2q005 answer no.2 for question q005, correct",
        checkbox3: "3q005 answer no.3 for question q005",
        checkbox4: "4q005 answer no.4 for question q005, correct",
        correct: "34"
    }, {
        qRefID: "q006",
        qRefText: "Question ID: q006 - sample question for testing",
        checkbox1: "1q006 answer no.1 for question q006, correct",
        checkbox2: "2q006 answer no.2 for question q006",
        checkbox3: "3q006 answer no.3 for question q006",
        checkbox4: "4q006 answer no.4 for question q006, correct",
        correct: "14"
    },
    {
        qRefID: "q007",
        qRefText: "Question ID: q007 - sample question for testing",
        checkbox1: "1q007 answer no.1 for question q007, correct",
        checkbox2: "2q007 answer no.2 for question q007, correct",
        checkbox3: "3q007 answer no.3 for question q007, correct",
        checkbox4: "4q007 answer no.4 for question q007, correct",
        correct: "1234"
    }
];

const start = document.getElementById("x1-button");

// const question = document.getElementById("question");
// const questionID = document.getElementById();

// const option1 = document.getElementById("option1");
// const option2 = document.getElementById("option2");
// const option3 = document.getElementById("option2");
// const option4 = document.getElementById("option2");
// const counter = document.getElementById("counter");
// const scoreBox = document.getElementById("score-box");
// const statusBox = document.getElementById("status-box");

const lastQuestion = questions.length - 1;

let currentQuestion = 0;
let count = 0;
let score = 0;




function showQuestion() {
    
    let rq = questions[currentQuestion];
    console.log(rq);
    
    
    // qestion.innerHTML = "<h4>" + rq.question + "</h4>";
    
    A.innerHTML = rq.checkbox1;
    B.innerHTML = rq.checkbox2;
    C.innerHTML = rq.checkbox3;
    D.innerHTML = rq.checkbox4;   
}



// test output
// console.log(lastQuestion);
// console.log(option1, option2);

start.addEventListener("click", startQuiz);

function startQuiz() {
    
       showQuestion();
    // showStatus();
}

// function showStatus() {
//     for (let rqIndex = 0; rqIndex <= lastQuestion; rqIndex++) {
//         console.log("zzzz");


//     }
// }

// function checkAnswer(answer) {
//     if (answer == questions[currentQuestion].correct) {
//         // answer is correct
//         score++;
//         // change progress color to green
//         answerIsCorrect();
//     } else {
//         // answer is wrong
//         // change progress color to red
//         answerIsWrong();
//     }
//     count = 0;
//     if (currentQuestion < lastQuestion) {
//         runningQuestion++;
//         showQuestion();
//     } else {
//         // end the quiz and show the score
//         clearInterval(TIMER);
//         scoreRender();
//     }
// }