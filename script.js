const quizData = [
  {
    question: "Pakistan ka capital kya hai?",
    options: ["Karachi", "Lahore", "Islamabad", "Peshawar"],
    correct: "Islamabad"
  },
  {
    question: "2 + 2 kitna hota hai?",
    options: ["3", "4", "5", "6"],
    correct: "4"
  },
  {
    question: "Quaid-e-Azam ka asal naam kya tha?",
    options: ["Liaquat Ali", "Allama Iqbal", "Muhammad Ali Jinnah", "Ayub Khan"],
    correct: "Muhammad Ali Jinnah"
  },
  {
    question: "Roza Islam ka kitna pillar hai?",
    options: ["Pehla", "Doosra", "Teesra", "Chotha"],
    correct: "Teesra"
  },
  {
    question: "Sab se bara samundar kaunsa hai?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correct: "Pacific"
  }
];

let currentIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  const current = quizData[currentIndex];
  questionEl.textContent = current.question;
  optionsEl.innerHTML = "";
  scoreEl.textContent = "";
  document.body.style.backgroundColor = "#f0f0f0";

  current.options.forEach(option => {
    const btn = document.createElement("button");
    btn.classList.add("option-btn");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(btn, current.correct);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(button, correctAnswer) {
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach(btn => btn.disabled = true);

  if (button.textContent === correctAnswer) {
    button.classList.add("correct");
    document.body.style.backgroundColor = "#c8f7c5";
    score++;
  } else {
    button.classList.add("incorrect");
    document.body.style.backgroundColor = "#f7c5c5";
  }
}

nextBtn.onclick = () => {
  currentIndex++;
  if (currentIndex < quizData.length) {
    loadQuestion();
  } else {
    showScore();
  }
};

function showScore() {
  questionEl.textContent = "Quiz Khatam Ho Gaya!";
  optionsEl.innerHTML = "";
  nextBtn.style.display = "none";
  document.body.style.backgroundColor = "#f0f0f0";
  scoreEl.innerHTML = `🎉 Aap ka score: <strong>${score}</strong> out of <strong>${quizData.length}</strong>`;
}

loadQuestion();

