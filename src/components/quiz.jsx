import { useState } from 'react';
import questions from '../assets/questions'; 

function Quiz({ category, setScore, onFinish }) {
  const filteredQuestions = questions.filter(q => q.category === category);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const currentQuestion = filteredQuestions[currentQuestionIndex];
  const labels = ["A", "B", "C", "D"];

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

  return (
    <div className="w-full max-w-2xl mx-auto p-6">
      <div className="mb-8">
        <p className="italic text-gray-500 dark:text-[#ABC1E1] text-sm mb-2">
            Question {currentQuestionIndex + 1} of {filteredQuestions.length}
        </p>
        <h2 className="text-2xl font-bold text-[#313E51] dark:text-white">{currentQuestion.text}</h2>
        <div className='w-full bg-white dark:bg-[#3B4D66] rounded-full h-2.5 mt-6 shadow-sm'>
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
            className={`flex items-center w-full p-4 bg-white dark:bg-[#3B4D66] rounded-xl gap-4 border-2 transition-all shadow-sm
              ${selectedOption === option ? 'border-purple-600' : 'border-transparent'}
              ${isSubmitted && option === currentQuestion.answer ? 'border-green-500' : ''}
              ${isSubmitted && selectedOption === option && option !== currentQuestion.answer ? 'border-red-500' : ''}
            `}
          >
            <div className={`w-10 h-10 rounded-md font-bold flex items-center justify-center 
              ${selectedOption === option ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600'}
            `}>
               {labels[index]}
            </div>
            <span className="flex-1 text-left font-bold text-[#313E51] dark:text-white">{option}</span>
          </button>
        ))}
      </div>

      <button 
          onClick={isSubmitted ? handleNextQuestion : handleSubmit} 
          className="w-full mt-6 py-4 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-500 transition-all shadow-lg"
      >
          {isSubmitted ? (currentQuestionIndex === filteredQuestions.length - 1 ? "Show Results" : "Next Question") : "Submit Answer"}
      </button>
      {error && <p className="text-red-500 text-center mt-2">Please select an answer</p>}
    </div>
  );
}

export default Quiz;