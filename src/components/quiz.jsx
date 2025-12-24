import { useState } from 'react';
import questions from '../assets/questions'; 

function Quiz({ category, setScore, onFinish }) {
  
  const filteredQuestions = questions.filter(q => q.category === category);

  if (!filteredQuestions || filteredQuestions.length === 0) {
    return <div className="p-10 text-center">Bu kategoriye ait soru bulunamadı.</div>;
  }

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const labels = ["A", "B", "C", "D"];
  const currentQuestion = filteredQuestions[currentQuestionIndex];

  const handleSelectOption = (option) => {
    if (isSubmitted) return;
    setSelectedOption(option);
    setError(false);
  };

  const handleSubmit = () => {
    if (!selectedOption) {
      setError(true);
      return;
    }

    setIsSubmitted(true);

    if (selectedOption === currentQuestion.answer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      onFinish();
    }
  };

  const getOptionClass = (option) => {
    let baseClass = "flex items-center w-full p-4 bg-white rounded-xl gap-4 border-2 cursor-pointer mb-3 shadow-sm group transition-all ";

    if (selectedOption !== option && !isSubmitted) {
        return baseClass + "border-transparent hover:border-purple-300";
    }

    if (!isSubmitted && selectedOption === option) {
        return baseClass + "border-purple-500 bg-purple-50";
    }

    if (isSubmitted) {
      if (option === currentQuestion.answer) {
        return baseClass + "border-green-500 bg-green-50 text-green-700";
      }
      if (selectedOption === option && option !== currentQuestion.answer) {
        return baseClass + "border-red-500 bg-red-50 text-red-700";
      }
    }

    return baseClass + "border-transparent";
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="mb-8">
        <p className="italic text-gray-500 text-sm mb-2">
            Question {currentQuestionIndex + 1} of {filteredQuestions.length}
        </p>
        <h2 className="text-2xl font-bold">{currentQuestion.text}</h2>
        
        <div className='w-full bg-gray-200 rounded-full h-2.5 mt-6'>
            <div 
                className='bg-purple-600 h-2.5 rounded-full transition-all duration-300' 
                style={{ width: `${((currentQuestionIndex + 1) / filteredQuestions.length) * 100}%` }}
            ></div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {currentQuestion.options.map((option, index) => (
          <button 
            key={index} 
            onClick={() => handleSelectOption(option)} 
            className={getOptionClass(option)}
          >
            <div className={`flex items-center justify-center w-10 h-10 rounded-md font-bold transition-colors
                ${selectedOption === option ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600 group-hover:bg-purple-100 group-hover:text-purple-600'}
            `}>
               {labels[index]}
            </div>
            
            <span className="flex-1 text-left font-semibold">{option}</span>

            {isSubmitted && option === currentQuestion.answer && (
                <span className="text-green-500 text-xl">✔</span>
            )}

            {isSubmitted && selectedOption === option && option !== currentQuestion.answer && (
                <span className="text-red-500 text-xl">✖</span>
            )}
          </button>
        ))}
      </div>

      {error && (
        <p className="flex items-center gap-2 text-red-500 mt-3 justify-center">
            <span className='text-xl'>!</span> Lütfen bir seçenek seçin.
        </p>
      )}

      {!isSubmitted ? (
        <button 
            onClick={handleSubmit} 
            className="w-full mt-6 py-4 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-500 transition-colors"
        >
            Submit Answer
        </button>
      ) : (
        <button 
            onClick={handleNextQuestion} 
            className='w-full mt-6 py-4 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-500 transition-colors'
        >
          {currentQuestionIndex === filteredQuestions.length - 1 ? "Show Results" : "Next Question"}
        </button>
      )}
    </div>
  );
}

export default Quiz;