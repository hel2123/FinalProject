//Question
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}

//quiz controller 
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}

//app function, used to add questions inside an array
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Practice time - </h1>";
    gameOverHTML = "<h2 id='score'> Done! <br> Congrats on completing your musical idea. <br> Practice playing your composition and be ready to perform it in class. </h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Begin your line by writing a clef for the instrument you're writing for.", ["Treble", "Alto","Bass", "Grand Staff"], "#"),
    new Question("Choose a song theme, and write it on the title line.", 
    ["Forest",
    "City",
    "Waterfall",
    "Desert"
  ], "#"),
new Question(
    "Write the tempo marking that will fit your theme.",
    ["Presto", "Andante", "Largo", "Allegro"
      ], "#"),
  new Question(
    "Write the time signature right after the clef. Choose one that fits your theme.",
    ["4/4", "3/4", "2/2", "6/8"
      ], "#"),
  new Question(
    "Tap out some rhythms and use stick notation to outline the first measure.",
    ["| ⌴ ||", "⌴ || ⌴", "||⌴|", "Other"
     ], "#"),
  new Question(
    "Add the note heads to the stick notation to outline a melody shape.",
    ["Scale", "Arpeggiating", "Neighbor", "Other"
      ], "#"),
  new Question(
    "Add more measures to complete your musical phrase. When it is complete, write a cesura with bold double-slashes",
    ["min. 8 measures", "12 measures", "15 measures", "Longer"
   ], "#"),
  new Question(
    "Play through your musical phrase and notice what you like or dislike when you hear it. Circle spots you dislike.",
    [
      "Circling many spots",
      "I love it!",
      "This one part is weird",
      "I don't feel sure, better play it again."
   ], "#"),
  new Question(
    "Edit rhythms and notes in the circles you drew",
    ["Change Rhythm", "Change Pitches", "Erase Measure", "Add a new measure"
   ], "#"),
  new Question(
    "Play through your musical phrase again and notice what you like or dislike when you hear it. Draw a box around spots you dislike.",
    [
      "Circling many spots",
      "I love it!",
      "This one part is weird",
      "I don't feel sure, better play it again."
   ], "#"),
  new Question(
    "Edit rhythms and notes in the boxes you drew",
    ["Change Rhythm", "Change Pitches", "Erase Measure", "Add a new measure"
    ], "#")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();






