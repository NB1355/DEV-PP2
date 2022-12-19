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
        corrects: "24"
    },
    {
        qRefID: "q002",
        qRefText: "Question ID: q002 - sample question for testing",
        checkbox1: "1q002 answer no.1 for question q002, correct",
        checkbox2: "2q002 answer no.2 for question q002",
        checkbox3: "3q002 answer no.3 for question q002",
        checkbox4: "4q002 answer no.4 for question q002, correct",
        corrects: "14"
    }, {
        qRefID: "q003",
        qRefText: "Question ID: q003 - sample question for testing",
        checkbox1: "1q003 answer no.1 for question q003",
        checkbox2: "2q003 answer no.2 for question q003, correct",
        checkbox3: "3q003 answer no.3 for question q003",
        checkbox4: "4q003 answer no.4 for question q003",
        corrects: "2"
    }, {
        qRefID: "q004",
        qRefText: "Question ID: q004 - sample question for testing",
        checkbox1: "1q001 answer no.1 for question q004, correct",
        checkbox2: "2q001 answer no.2 for question q004, correct",
        checkbox3: "3q001 answer no.3 for question q004, correct",
        checkbox4: "4q001 answer no.4 for question q004, correct",
        corrects: "1234"
    }, {
        qRefID: "q005",
        qRefText: "Question ID: q005 - sample question for testing",
        checkbox1: "1q005 answer no.1 for question q005",
        checkbox2: "2q005 answer no.2 for question q005, correct",
        checkbox3: "3q005 answer no.3 for question q005",
        checkbox4: "4q005 answer no.4 for question q005, correct",
        corrects: "34"
    }, {
        qRefID: "q006",
        qRefText: "Question ID: q006 - sample question for testing",
        checkbox1: "1q006 answer no.1 for question q006, correct",
        checkbox2: "2q006 answer no.2 for question q006",
        checkbox3: "3q006 answer no.3 for question q006",
        checkbox4: "4q006 answer no.4 for question q006, correct",
        corrects: "14"
    },
    {
        qRefID: "q007",
        qRefText: "Question ID: q007 - sample question for testing",
        checkbox1: "1q007 answer no.1 for question q007, correct",
        checkbox2: "2q007 answer no.2 for question q007, correct",
        checkbox3: "3q007 answer no.3 for question q007, correct",
        checkbox4: "4q007 answer no.4 for question q007, correct",
        corrects: "1234"
    }
];

const start = document.getElementById("x1-button");
// const next 

const lastQuestion = questions.length - 1;

let currentQuestion = 1;
let count = 0;
let score = 0;

function showQuestion() {
    let rq = questions[currentQuestion];

    qID.innerHTML = rq.qRefID
    qText.innerHTML = rq.qRefText;
    A.innerHTML = rq.checkbox1;
    B.innerHTML = rq.checkbox2;
    C.innerHTML = rq.checkbox3;
    D.innerHTML = rq.checkbox4;

    xCorrects = rq.corrects;
    i = xCorrects.length;

    for (i = 0; i < xCorrects.length; i++) {
        let correct = xCorrects.charAt(i);
        switch (correct) {
            case "1":
                console.log(correct);
                break;
            case "2":
                console.log(correct);
                break;
            case "3":
                console.log(correct);
                break;
            case "4":
                console.log(correct);
                break;
        }


        // console.log(correct);
    }
}


start.addEventListener("click", runQuiz);
next.addEventListener("click", runQuiz);

function runQuiz() {

    showQuestion();
    i++
}


function check() {
    document.getElementById().checked = check;
}

function uncheck() {
    document.getElementById().checked = uncheck;
}

// test output
// console.log(lastQuestion);
// console.log(option1, option2);

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