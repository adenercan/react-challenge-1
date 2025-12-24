import questions from '../assets/questions'; // Dosya yolunun doğru olduğundan emin ol

function Quiz() {
  const labels = ["A", "B", "C", "D"];

  const handleAnswer = (selectedOption, correctAnswer) => {
    if (selectedOption === correctAnswer) {
      alert("Doğru Cevap! 🎉");
    } else {
      alert("Yanlış Cevap. ❌");
    }
  };

  return (
    <div>
      <h1>Frontend Quiz</h1>
      
      {questions.map((item, qIndex) => (
        <div key={qIndex}>
          <h3>{qIndex + 1}. {item.text}</h3>
          
          <div>
            {item.options.map((option, oIndex) => (
              <button 
                key={oIndex}
                onClick={() => handleAnswer(option, item.answer)}
              >
                <strong>{labels[oIndex]}:</strong> {option}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Quiz;