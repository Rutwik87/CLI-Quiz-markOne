var readlineSync = require('readline-sync')
const chalk = require('chalk')


var data = [
  {
    question:"Where does Rutwik live?", 
    answer:"Mumbai"
  },
  {
    question:"What is his favorite color?",
    answer:"black"
  },
  {
    question:"Which college did he go to for engineering?",
    answer:"VJTI"
  },
  {
    question:"What is his mother tongue?",
    answer:"Marathi"
  },
  {
    question:"What is his favorite mobile game?",
    answer:"pubg"
  }
]

var score = 0
var leaderScore = 4
var userName = ""

function welcomeScreen(){
  
  console.log(chalk.cyan("-----WELCOME TO KNOW RUTWIK GAME-----\n"))

  userName = readlineSync.question(chalk.cyan("Tell Us Your Name\n"))

  console.log(chalk.white("\n"+ chalk.green(userName) +" for every correct answer you will gain 1 point and lose 1 point for wrong answer\nLets Begin !!!!!\n\n"))

}

function check(question,answer) {
  var userAnswer = readlineSync.question(chalk.green(question) + "\n")

  if(userAnswer.toUpperCase() === answer.toUpperCase() ) {
    console.log(chalk.green("Great!! You got that right.\n"))
    score++
  }
  else{
    console.log(chalk.red("Wrong Answer!!\n"))
    score--
  }

  if(score>0){
    console.log("Score: " + chalk.green(score))
  }
  else if (score === 0){
    console.log("Score: " + chalk.white(score))
  }
  else {
    console.log("Score: " + chalk.red(score))
  }
  
  console.log(chalk.yellow("---------------------------"))
}

function askQuestion(){
  for(var i = 0; i < data.length; i++){
    question = data[i].question
    answer = data[i].answer
    check(question,answer)
  }
}

function isLeader(score){
  console.log(chalk.white("=====================================\nThank You For Playing With Us!!"))
  if (score > leaderScore){
    leaderScore = score
    console.log(chalk.green("Congratulations " + userName+ "!!!\nYou know Rutwik better than anyone else\n"))
  }
  else{
    console.log(chalk.green("Rutwik is highest scorer with score: " + leaderScore))
  }
}

welcomeScreen()
askQuestion()
isLeader(score)
