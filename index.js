var readlineSync = require("readline-sync");
var chalk = require("chalk");

var userName = readlineSync.question("May I have your name? ");
console.clear();
var messageWelcome = "\nWelcome "+chalk.yellow(userName)+`! to 💥 ${chalk.white.bgYellow.bold(" DO YOU KNOW ")}${chalk.yellow.bgWhite.bold(" VISHNU ")} 💥\nLet's start the quiz✨\n\n`;
var messageRightAnswer = chalk.bold.green("Right Answer")+ " 😍";
var messageWrongAnswer = chalk.bold.red("Wrong Answer")+ " 💔";
var score = 0;
function scoreMessage(){
   return "Score: "+score;
}

function checkAnswer(question, answer){
  var userAnswer = (readlineSync.question(chalk.bold.blueBright(question)+"\n"));
  if (userAnswer.toUpperCase() === answer.toUpperCase()){
    score += 1;
    console.log(messageRightAnswer);
    console.log(chalk.cyan(scoreMessage()));
    console.log("\n");
  }
  else{
    console.log(messageWrongAnswer);
    console.log("Right answer is '"+chalk.green(answer)+"'");
    console.log(chalk.cyan(scoreMessage()));
    console.log("\n");
  }
}

var questionsList = [
  {
    question: "What is my mother tongue ?",
    answer: "malayalam",
  },
  {
    question: "Am I from a 'metro-city' or 'town' or 'village' ?",
    answer: "village",
  },
  {
    question: "Do I like exploring places on a 'car' or 'motorbike' ?",
    answer: "motorbike",
  },
  {
    question: "What is my pet's name ?",
    answer: "tommy",
  },
  {
    question: "Do I prefer 'cats' or 'dogs' ?",
    answer: "dogs",
  },
  {
    question: "What is my favourite sports ?",
    answer: "football",
  },
  {
    question: "Who is my favourite footballer ?",
    answer: "messi",
  },
  {
    question: "What is my favourite number ?",
    answer: "7",
  },
  {
    question: "What is the country I want to visit if given a chance ?",
    answer: "switzerland",
  },
  {
    question: "Who is my favourite youtuber ?",
    answer: "tanay pratap"
  }
];

var highScores = [
  {name: "  M Vijayakumar", score: "8"},
  {name: "  Pushpalatha S", score: "8"},
  {name: "  Aswathy V Nair", score: "8"}
];

var highScore = 0;
var messageHighScores = "";
for (var i=0; i<highScores.length; i++){
  if(highScores[i].score > highScore){
    highScore = highScores[i].score;
  }
  messageHighScores += highScores[i].name+" : "+highScores[i].score+"\n";
}


console.log(messageWelcome);
for (var i=0; i<questionsList.length; i++){
  checkAnswer(questionsList[i].question, questionsList[i].answer);
}

console.log("\n🏅Your final score is ",score,"🏅\n\n");
if (score >= highScore){
  console.log("Wow! You know me better than anyone else 🔥🔥🔥\nPing me on twitter @_VishnuVNair and I will update the High Scorers list ✌\n\n")
}
else if (score >= 7){
  console.log("You know me pretty well!! 🔥\nPing me on twitter @_VishnuVNair and I will update the "+ chalk.bold.black.bgWhite(" High Scorers ")+" list ✌\n\n");
}

console.log(chalk.bold.black.bgWhite(" 🏆   HIGH SCORERS   🏆 "));
console.log(chalk.bold.magentaBright(messageHighScores));
