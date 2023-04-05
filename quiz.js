
function Questions(question, choices, answer) {
    this.question = question;
    this.choices = choices;
    this.answer = answer;
}
let quiz = [new Questions("In which HTML element, we put the JavaScript code?", ["<js>", "<javascript>", "<script>", "<scripting>"], "<script>"),
new Questions("JavaScript is the programming language of the _____.", ["Desktop", "Mobile", "Web", "Server"], "Web"),
new Questions("Which type of JavaScript language is _____?", ["Object-oriented", "Object-based", "Functional programming", "All of the above"], "Object-based"),
new Questions("JavaScript code can be written in ____.", ["JavaScript file (.js file)", "HTML document directly", "JavaScript file and in HTML document directly", "In style sheets (.css file)"], "JavaScript file and in HTML document directly"),
new Questions("Which JavaScript method is used to access an HTML element by id?", ["getElementById()", "getElement(id)", "getElementById(id)", "elementById(id)"], "getElementById(id)")];

let questionText, choicebuttons, index = 0, attempted = 0, totalQuestions = quiz.length, score = 0;
console.log(questionText);

function loadQuiz() {
    if (index === 0) {
        questionText = document.getElementById('question').innerText = quiz[index].question;
        document.getElementById('attempt').innerText = index + ' out of ' + totalQuestions + ' attempted';
        choicebuttons = document.querySelectorAll('button');
        let i, choice;
        for (i = 0; i < choicebuttons.length; i++) {
            choice = choicebuttons[i];
            choice.innerText = quiz[index].choices[i];
            choice.addEventListener('click', clickEventHandler);
        }
    } else if (index === totalQuestions) {
        document.getElementById('attempt').innerHTML = '<p> Congratulations, you have scored ' + score + '/' + totalQuestions + ' and percentage is ' + ((score / totalQuestions) * 100).toFixed() + ' !!! </p>';
    } else {
        questionText = document.getElementById('question').innerText = quiz[index].question;
        document.getElementById('attempt').innerText = index + ' out of ' + totalQuestions + ' attempted';
        choicebuttons = document.querySelectorAll('button');
        let i, choice;
        for (i = 0; i < choicebuttons.length; i++) {
            choice = choicebuttons[i];
            choice.innerText = quiz[index].choices[i];
        }
    }
}

function clickEventHandler(event) {
    if (index < quiz.length) {
        if (quiz[index].answer === event.target.innerText) {
            score += 1;
        }
        index += 1;
        loadQuiz();
    }
}

loadQuiz();