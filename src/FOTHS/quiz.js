const questions = [
  {
    question: "🌍 Which is the largest ocean on Earth?",
    options: ["Atlantic", "Pacific", "Indian", "Arctic"],
    answer: 1
  },
  {
    question: "🪐 Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Mercury"],
    answer: 1
  },
  {
    question: "⚡ Who invented the electric bulb?",
    options: ["Nikola Tesla", "Thomas Edison", "Albert Einstein", "Isaac Newton"],
    answer: 1
  },
  {
    question: "🍎 Which company makes the iPhone?",
    options: ["Samsung", "Apple", "Nokia", "OnePlus"],
    answer: 1
  },
  {
    question: "📖 How many letters are there in the English alphabet?",
    options: ["24", "25", "26", "27"],
    answer: 2
  },
  {
    question: "🎶 Who is known as the King of Pop?",
    options: ["Elvis Presley", "Michael Jackson", "Justin Bieber", "Prince"],
    answer: 1
  },
  {
    question: "🏏 Which country invented cricket?",
    options: ["India", "England", "Australia", "South Africa"],
    answer: 1
  },
  {
    question: "🗽 Where is the Statue of Liberty located?",
    options: ["Paris", "New York", "London", "Washington D.C."],
    answer: 1
  },
  {
    question: "⏰ How many hours are there in two days?",
    options: ["24", "36", "48", "60"],
    answer: 2
  },
  {
    question: "❄️ What is the freezing point of water?",
    options: ["0°C", "10°C", "32°C", "100°C"],
    answer: 0
  },
  {
    question: "🚀 Who was the first person to walk on the Moon?",
    options: ["Yuri Gagarin", "Neil Armstrong", "Buzz Aldrin", "Rakesh Sharma"],
    answer: 1
  },
  {
    question: "🌳 Which gas do plants release during photosynthesis?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
    answer: 0
  },
  {
    question: "🎥 Which is the first full-length animated movie?",
    options: ["Lion King", "Snow White", "Toy Story", "Cinderella"],
    answer: 1
  },
  {
    question: "🦁 Which animal is known as the King of the Jungle?",
    options: ["Tiger", "Lion", "Elephant", "Cheetah"],
    answer: 1
  },
  {
    question: "📅 How many days are there in a leap year?",
    options: ["365", "366", "364", "367"],
    answer: 1
  }
];

let currentQ = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  let q = questions[currentQ];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.classList.add("option-btn");
    btn.onclick = () => checkAnswer(i, btn);
    optionsEl.appendChild(btn);
  });

  // Hide NEXT until answered
  nextBtn.style.display = "none";
}

function checkAnswer(selected, btnEl) {
  const optionButtons = document.querySelectorAll(".option-btn");

  // Disable all options after one click
  optionButtons.forEach((btn) => {
    btn.disabled = true;
  });

  // Mark correct option green
  optionButtons.forEach((btn, i) => {
    if (i === questions[currentQ].answer) {
      btn.classList.add("correct");
    }
  });

  // If wrong, mark selected red
  if (selected !== questions[currentQ].answer) {
    btnEl.classList.add("wrong");
  } else {
    score++;
  }

  // Show NEXT button
  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  currentQ++;
  if (currentQ < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById("quiz-box").classList.add("hidden");
  resultBox.classList.remove("hidden");
  scoreEl.textContent = `${score} / ${questions.length}`;
}

// Initial load
loadQuestion();
