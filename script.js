const questions=[{
    question:"Which is largest animal in the world?",
    answers:[{text:"Shark",correct:false},
    {text:"Blue Whale",correct:true},
    {text:"Elephant",correct:false},
    {text:"Giraffe",correct:false}


]
},
{
    question:"Which ocean is the largest in the world?",
    answers:[{text:"Hindi Mahasagar",correct:false},
    {text:"Atlantica",correct:false},
    {text:"The Pacific Ocean.",correct:true},
    {text:"Arabi",correct:false}
]
},

{
    question:"What is the pH value of the human body?",
    answers:[{text:"9.2 to 9.8",correct:false},
    {text:"7.0 to 7.8",correct:true},
    {text:"6.1 to 6.3",correct:false},
    {text:"5.4 to 5.6",correct:false}
]
},
{
    question:" Which of the following Himalayan regions is called Shivaliks?",
    answers:[{text:"Inner Himalayas",correct:false},
    {text:"Upper Himalayas",correct:false},
    {text:"Lower Himalayas",correct:true},
    {text:"Outer Himalayas",correct:false}
]
},
{
    question:"  Which of the given devices is used for counting blood cells?",
    answers:[{text:"Hmelethometer",correct:false},
    {text:"Spyscometer",correct:false},
    {text:"Hemocytometer",correct:true},
    {text:"Hamosytometer",correct:false}
]
}
,
{
    question:" Forming of Association in India is?",
    answers:[{text:"Leagal Right.",correct:false},
    {text:"Illegal Right.",correct:false},
    {text:"Natural Right.",correct:false},
    {text:"Fundamental Right.",correct:true}
]
},

{
    question:"Which of the given cities is located on the bank of river Ganga?",
    answers:[{text:"Patna",correct:false},
    {text:"Gwalior",correct:false},
    {text:"Bhopal",correct:false},
    {text:"Mathura",correct:true}
]
},
];
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-button");
const nextButton=document.getElementById("next-btn");

let currentQuestionIdx=0;
let score=0;
function startQuiz(){
    currentQuestionIdx=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currQuestion=questions[currentQuestionIdx];
    let queNo=currentQuestionIdx+1;
    questionElement.innerHTML=queNo+". "+currQuestion.question;
    currQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
       
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
       
    });
}
function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;

    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled=true;
    });
    nextButton.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML=`Your scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}
function handleNextButton(){
    currentQuestionIdx++;
    if(currentQuestionIdx < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}
nextButton.addEventListener("click" ,()=>{
    if(currentQuestionIdx< questions.length){
handleNextButton();
    }else{
        startQuiz();

    }
})
 startQuiz();