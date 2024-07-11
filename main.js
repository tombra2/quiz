let score = 0;


function trueAnswer(selectedAnswer,richtige_antwort){

    const result = document.getElementById('result');
    
    if (selectedAnswer) {
        const answerValue = selectedAnswer.value;
        if (answerValue === richtige_antwort) {
            result.textContent = 'Richtig!';
            result.className = 'mt-4 text-lg text-green-500';
            score++
        } else {
            result.textContent = 'Falsch, versuche es nochmal.';
            result.className = 'mt-4 text-lg text-red-500';
            score--
        }
    } else {
        result.textContent = 'Bitte wähle eine Antwort aus.';
        result.className = 'mt-4 text-lg text-yellow-500';
    }
    
}   





function checkAnswer() {
    const form = document.getElementById('quiz-form1-1');
    const form2= document.getElementById("quiz-form-2")
   
    const selectedAnswer = form.querySelector('input[name="answer"]:checked');
    const selectedAnswer2= form2.querySelector('input[name="answer"]:checked');


trueAnswer(selectedAnswer,"delta")
trueAnswer(selectedAnswer2,"Sam")

console.log(score)

};  
