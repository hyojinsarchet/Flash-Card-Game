////////////////////////  Model   /////////////////////
var flashCards = [
      {
        question: "안녕!",
        answer: "Hello! [An-nyeong]"
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
var currentScoreEl = document.querySelector('.currentScore')
var correct = document.querySelector('.correct_button')
var wrong = document.querySelector('.wrong_button')
var next = document.querySelector('.next_button')
var reset = document.querySelector('.reset_button')
var button = document.getElementsByClassName('button')

var currentScore = 0

// default set & also used for reset button
window.onload = SetDefaultValue();
function SetDefaultValue() {
    currentQuestion.innerText = flashCards[0].question
    currentAnswer.innerText = ''
}

/*
1. some variable to track currentScore element (currentScoreEl or currentScoreNode)
2. a different variable to track the number current score (how many they've gotten right)
3. A. if answer is correct (click correct button), increment current score variable
3. B. set innerText of currentScoreEl or currentScoreNode to current score
*/

// When 'correct_button' is clicked -> show Answer & add currentScore ++1
// Q: But now it works only once and gets error & doesn't add score

var counter = 0

correct.addEventListener('click', () => {

    currentScore ++
    currentScoreEl.innerText = currentScore

    // When reached your goal you get alert message.
    if(currentScore === 5) {
        alert("You've reached your goal today!")
    }

    // for(var i = 0; i <= flashCards.length; i++) {
    //     currentAnswer.innerText = flashCards[i].answer
    // }
    counter ++
    currentAnswer.innerText = flashCards[counter].answer
})


// When 'wrong_button' is clicked -> just show answer
// Q: But so far it works only once and stops
// Q: When I remove 'return' it gives a random answer
wrong.addEventListener('click', () => {

    // for(var i = 0; i <= flashCards.length; i++) {
    //     currentAnswer.innerText = flashCards[i].answer
    // }
    counter ++
    currentAnswer.innerText = flashCards[counter].answer
})


// When 'next_button' is clicked -> show next question + empty answer box
// Q: But now, it works only once and doesn't empty answer box
next.addEventListener('click', () => {
  counter++

    // for(var i = 1; i <= flashCards.length; i++) {
        counter ++
        currentQuestion.innerText = flashCards[counter].question
        currentAnswer.innerText = ''
    // }
})


// When 'reset_button' is clicked it resets.
reset.addEventListener('click', () => {
    SetDefaultValue()
})




// for(var i = 0; i < button.length; i++) {
//     button[i].onmouseover = function() {
//         this.setAttribute("class", "buttonStyle")
//     }
// }


// Add addEventListener on Buttons!
// button.addEventListener("mouseover", function () {
//     body.classList.add('buttonStyle')
// })

// Learn about default value from this link below:
// https://www.sitepoint.com/community/t/how-to-set-default-value/6914
