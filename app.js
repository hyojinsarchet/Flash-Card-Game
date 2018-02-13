////////////////////////  Model   /////////////////////
var flashCards = [
      {
        question: "안녕하세요!",
        answer: "Hello! [An-nyeong-ha-se-yo]"
      },
      {
        question: "친구",
        answer: "Friend [Chin-gu]"
      },
      {
        question: "대한민국",
        answer: "South Korea [Dae-han-min-guk]"
      },
      {
        question: "감사합니다.",
        answer: "Thank you. [Gam-sa-hap-ni-da]"
      },
      {
        question: "반갑습니다",
        answer: "Nice to meet you. [Ban-gap-seup-ni-da]"
      },
      {
        question: "소주",
        answer: "Soju"
      },
      {
        question: "평창",
        answer: "Pyongchang"
      },
      {
        question: "올림픽",
        answer: "Olympc"
      },
      {
        question: "제너럴 어셈블리",
        answer: "General Assembly"
      },
      {
        question: "맥주",
        answer: "Beer [Maek-ju]"
      }
]


var question = document.querySelector('.question')
var currentQuestion = document.querySelector('.currentQuestion')
var answer = document.querySelector('.answer')
var currentAnswer = document.querySelector('.currentAnswer')
var score = document.querySelector('.score')
var currentScore = parseFloat(document.querySelector('.currentScore').value)
var correct = document.querySelector('.correct_button')
var wrong = document.querySelector('.wrong_button')
var next = document.querySelector('.next_button')
var reset = document.querySelector('.reset_button')

currentScore = 0


// default set?
// So can be used for reset as well.
window.onload = SetDefaultValue();
function SetDefaultValue() {
    currentQuestion.innerText = flashCards[0].question
    currentAnswer.innerText = ''
}


// When 'next_button' is clicked
// show next question + empty answer box
// So far it works only once, doesn't empty
next.addEventListener('click', () => {

      for(i = 1; i <= flashCards.length; i++) {
          return currentQuestion.innerText = flashCards[i].question
          currentAnswer.innerText = ''
      }
})

// When 'correct_button' is clicked
// add currentScore ++1
// and show Answer
correct.addEventListener('click', () => {
    // when score reaches 5 - > add message "You've reached today's goal!"

      for(i = 0; i <= flashCards.length; i++) {
          return currentAnswer.innerText = flashCards[i].answer
          // return currentScore.innerText += 1
          currentScore += 1
          currentScore = currentScore.innerText
      }
})


// When 'wrong_button' is clicked
// just show answer
// So far it works only once
wrong.addEventListener('click', () => {

    for(i = 0; i <= flashCards.length; i++) {
        return currentAnswer.innerText = flashCards[i].answer
    }
})


// When 'reset_button' is clicked reset!
reset.addEventListener('click', () => {
    SetDefaultValue()
})


// Add addEventListener on Buttons!
// button.addEventListener("mouseover", function () {
//     body.classList.add('buttonStyle')
// })

// Learn about default value from this link
// https://www.sitepoint.com/community/t/how-to-set-default-value/6914
