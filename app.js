////////////////////////  Model   /////////////////////

// flasgCards array contains 15 questions and answers.
var flashCards = [
      {
        question: "Hello!",
        answer: "안녕! [An-nyeong]"
      },
      {
        question: "Friend",
        answer: "친구 [Chin-gu]"
      },
      {
        question: "South Korea",
        answer: "대한민국 [Dae-han-min-guk]"
      },
      {
        question: "Thank you.",
        answer: "감사합니다. [Gam-sa-hap-ni-da]"
      },
      {
        question: "Nice to meet you.",
        answer: "반갑습니다. [Ban-gap-seup-ni-da]"
      },
      {
        question: "Soju",
        answer: "소주 [soju]"
      },
      {
        question: "Pyongchang",
        answer: "평창 [Pyong-chang]"
      },
      {
        question: "Olympic",
        answer: "올림픽 [Ol-lym-pic]"
      },
      {
        question: "dog",
        answer: "개 [gae]"
      },
      {
        question: "Beer",
        answer: "맥주 [Maek-ju]"
      },
      {
        question: "Party",
        answer: "파티 [Pa-ti]"
      },
      {
        question: "Coding",
        answer: "코딩 [Co-ding]"
      },
      {
        question: "Beer",
        answer: "맥주 [Maek-ju]"
      },
      {
        question: "Bag",
        answer: "가방 [Ga-bang]"
      },
      {
        question: "Paper",
        answer: "종이 [Jong-i]"
      },
      {
        question: "Pencil",
        answer: "연필 [Yeon-pil]"
      }
]


var container = document.querySelector('.container')
var question = document.querySelector('.question')
var currentQuestion = document.querySelector('.currentQuestion')
var answer = document.querySelector('.answer')
var currentAnswer = document.querySelector('.currentAnswer')
var score = document.querySelector('.score')
var currentScoreEl = document.querySelector('.currentScore')
var correct = document.querySelector('.correct_button')
var wrong = document.querySelector('.wrong_button')
var next = document.querySelector('.next_button')
var reset = document.querySelector('.reset_button')
var button = document.getElementsByClassName('button')
var clapping = document.querySelector('.clapping')

var currentScore = 0
var counter = 0



//////////////////////// ViewModel ////////////////////////

// used for default set & reset button
window.onload = SetDefaultValue();
function SetDefaultValue() {

    counter = 0

    currentQuestion.innerText = flashCards[counter].question
    currentAnswer.innerText = flashCards[counter].answer

    currentAnswer.innerText = ''
    currentScore = 0
    currentScoreEl.innerText = currentScore
}


// When 'correct_button' is clicked -> show Answer & add currentScore ++1
correct.addEventListener('click', () => {

    currentScore ++
    currentScoreEl.innerText = currentScore

    // When reached your goal you get the cute image popup.
    if(currentScore === 5) {
        currentQuestion.innerHTML = ''
        currentAnswer.innerHTML = ''
        clapping.style.display = 'block'
        container.appendChild(clapping)

        // When the popup image is clicked it disappers.
        clapping.onclick = function() {
            clapping.style.display = "none"
        }
    }

    counter ++
    currentAnswer.innerText = flashCards[counter - 1].answer
})


// When 'wrong_button' is clicked -> just show answer.
wrong.addEventListener('click', () => {

    counter ++
    currentAnswer.innerText = flashCards[counter - 1].answer
})


// When 'next_button' is clicked -> show next question + empty answer box.
next.addEventListener('click', () => {

    // counter++
    currentQuestion.innerText = flashCards[counter].question
    currentAnswer.innerText = ''
})


// When 'reset_button' is clicked it resets.
reset.addEventListener('click', () => {
    SetDefaultValue()
})



// Learned about 'default value' from this link below:
// https://www.sitepoint.com/community/t/how-to-set-default-value/6914

// Learned about 'pop up' from this link below:
// https://stackoverflow.com/questions/7332421/writing-a-javascript-function-to-open-an-image-in-csspop-up-with-a-close-butto
