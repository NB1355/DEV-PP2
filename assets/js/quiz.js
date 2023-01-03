// Question source
/////////////////////get from jason upload ?!!!!!!!!!! select: ok, upload?

// >> INPUT-------------------------------------------------------------->


// >> Question Structure

let questions = [{
    qRefID: "q001",
    qRefText: "Question ID: q001 - sample question for testing",
    checkbox1: "1q001 answer no.1 for question q001",
    checkbox2: "2q001 answer no.2 for question q001",
    checkbox3: "3q001 answer no.3 for question q001, correct",
    checkbox4: "4q001 answer no.4 for question q001, correct",
    corrects: "1,4,r,3"
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
},
{
    qRefID: "q005",
    qRefText: "Question ID: q005 - sample question for testing",
    checkbox1: "1q005 answer no.1 for question q005",
    checkbox2: "2q005 answer no.2 for question q005, correct",
    checkbox3: "3q005 answer no.3 for question q005",
    checkbox4: "4q005 answer no.4 for question q005, correct",
    corrects: "34"
},
{
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


// >> Parameters to be set by user

let queryCount = 3; // number of the selected questions
let quizTime = 45; // munits to calculate 

var select = [];
let maxNum = questions.length;


function randomSelect() {

while (select.length < queryCount) {
    var num = Math.floor(Math.random() * maxNum) + 1;

    if (num <= maxNum && select.includes(num) == false) {
        select.push(num);
        
   var button = document.createElement("button");
    button.innerHTML = num;
    button.className = "x-questions";


    var ul = document.getElementsByTagName("ul")[1];
    ul.appendChild(button);

    }
};
console.log (select); // Just for Control, delete later! 
info1.innerHTML = "This test has " + maxNum + " questions, " + queryCount + " are selected randomly ."  

}


document.getElementById("x1-button").addEventListener("click", randomSelect);









function questionNext(activeQID) {

let rq = questions[activeQID - 1];

// show questions 
qID.innerHTML = rq.qRefID
qText.innerHTML = rq.qRefText;
A.innerHTML = rq.checkbox1;
B.innerHTML = rq.checkbox2;
C.innerHTML = rq.checkbox3;
D.innerHTML = rq.checkbox4;
xCorrects = rq.corrects;

optionesTrue(xCorrects);

};

//setup correct options

function optionesTrue() {

for (i = 0; i < xCorrects.length; i++) {
    let correct = xCorrects.charAt(i);
    switch (correct) {
        case "1":
            document.getElementById("checkbox1").checked = true;
            break;
        case "2":
            document.getElementById("checkbox2").checked = true;
            break;
        case "3":
            document.getElementById("checkbox3").checked = true;
            break;
        case "4":
            document.getElementById("checkbox4").checked = true;
            break;
    }
}
}


function optionsClear() {

document.getElementById("checkbox1").checked = false;
document.getElementById("checkbox2").checked = false;
document.getElementById("checkbox3").checked = false;
document.getElementById("checkbox4").checked = false;

document.getElementById("option1").checked = false;
document.getElementById("option2").checked = false;
document.getElementById("option3").checked = false;
document.getElementById("option4").checked = false;
}


function checkAnswers() {

if (option1.checked == checkbox1.checked &&
    option2.checked == checkbox2.checked &&
    option3.checked == checkbox3.checked &&
    option4.checked == checkbox4.checked
) {
    console.log("scorePLus");
} else {
    console.log("scoreMinus");
}
}