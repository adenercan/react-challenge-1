import React from "react";

function Result({ score, onRestart, totalQuestions, category }) {
  
  const iconMap = {
    "HTML": "src/assets/imgs/html-icon.svg",
    "CSS": "src/assets/imgs/css-icon.svg",
    "JavaScript": "src/assets/imgs/js-icon.svg",
    "Accessibility": "src/assets/imgs/accessibility-icon.svg"
  };

  const currentIcon = iconMap[category] || iconMap["HTML"];

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto p-6">
      <div className="w-full mb-8 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
        <div>
           <h1 className="text-4xl font-light text-gray-700">Quiz completed</h1>
           <h1 className="text-4xl font-bold text-gray-900">You scored...</h1>
        </div>
      </div>

      <div className="w-full bg-white p-12 rounded-2xl shadow-sm text-center">
        
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className={`p-2 rounded-lg ${category === 'HTML' ? 'bg-orange-100' : category === 'CSS' ? 'bg-green-100' : category === 'JavaScript' ? 'bg-blue-100' : 'bg-purple-100'}`}>
             <img src={currentIcon} alt={category} className="w-10 h-10" />
          </div>
          <span className="text-2xl font-bold text-gray-700">{category}</span>
        </div>
        
        <div className="flex flex-col items-center mb-8">
          <span className="text-[5rem] font-bold leading-none text-gray-800">{score}</span>
          <span className="text-gray-500 text-2xl mt-4">out of {totalQuestions}</span>
        </div>
        
        <button 
          className="w-full py-4 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-500 transition-colors text-lg shadow-lg hover:shadow-purple-200" 
          onClick={onRestart}
        >
          Play Again
        </button>

      </div>
    </div>
  );
}

export default Result;