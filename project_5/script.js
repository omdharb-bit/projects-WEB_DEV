document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");
  const questionContainer = document.getElementById("question-container");
  const questiontext = document.getElementById("question-text");
  const resultContainer = document.getElementById("result-container");
  const choicesList = document.getElementById("choices-list");
  const scoreDisplay = document.getElementById("score");

  const questions = [
    {
      question: "What is the capital of France",
      choices: ["Paris", "London", "Berelin", "Madrid"],
      answer: " Paris",
    },
    {
      question: "Which cricketer is known as Captain Cool",
      choices: ["Virat-Kohli", "M.S.Dhoni", "Rohit Sharma", "Sikhar Dhawan"],
      answer: "M.S.Dhoni",
    },
    {
      question: " What is the largest lake in the world?",
      choices: ["Caspian Sea", "Baikal", "Lake Superior", "Ontario"],
      answer: "Baikal",
    },
    {
      question:
        " Which planet in the solar system is known as the “Red Planet”?",
      choices: ["Venus", "Earth", "Mars", "Jupiter"],
      answer: "Mars",
    },
    {
      question: "What gas is used to extinguish fires?",
      choices: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
      answer: "Carbon dioxide",
    },
    {
      question: "Which country won the first-ever Cricket World Cup in 1975?",
      choices: ["West Indies", " Australia", "England", "India"],
      answer: "West Indies",
    },
    {
      question: "Who won the ICC Champions Trophy in 2013?",
      choices: ["Australia", "England", "India", " South Africa"],
      answer: "India",
    },
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  startBtn.addEventListener("click", startQuiz);

  function startQuiz() {
    startBtn.classList.add("hidden");
    resultContainer.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    showQuestion();
  }

  function showQuestion() {
    nextBtn.classList.add("hidden");
    questiontext.textContent = questions[currentQuestionIndex].question;
    choicesList.innerHTML = ""//clear preevious choices
    questions[currentQuestionIndex].choices.forEach(choice => {
      const li = document.createElement('li')
      li.textContent = choice
      li.addEventListener('click',selectAnswer(choice))
    })
  }
  
  
  function selectAnswer(choice) {
  
  
  }
});
