function Result({ score, onRestart, totalQuestions, category }) {
  const iconMap = {
    "HTML": "src/assets/imgs/html-icon.svg",
    "CSS": "src/assets/imgs/css-icon.svg",
    "JavaScript": "src/assets/imgs/js-icon.svg",
    "Accessibility": "src/assets/imgs/accessibility-icon.svg"
  };

  return (
    <div className="flex flex-col items-center w-full max-w-2xl mx-auto p-6">
      <div className="w-full mb-8">
           <h1 className="text-4xl font-light text-[#313E51] dark:text-white">Quiz completed</h1>
           <h1 className="text-4xl font-bold text-[#313E51] dark:text-white">You scored...</h1>
      </div>

      <div className="w-full bg-white dark:bg-[#3B4D66] p-12 rounded-2xl shadow-sm text-center">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="p-2 bg-gray-100 rounded-lg">
             <img src={iconMap[category]} alt={category} className="w-10 h-10" />
          </div>
          <span className="text-2xl font-bold text-[#313E51] dark:text-white">{category}</span>
        </div>
        <div className="flex flex-col items-center mb-8">
          <span className="text-8xl font-bold text-[#313E51] dark:text-white">{score}</span>
          <span className="text-[#626C7F] dark:text-[#ABC1E1] text-2xl mt-4">out of {totalQuestions}</span>
        </div>
        <button 
          className="w-full py-4 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-500 transition-all shadow-lg" 
          onClick={onRestart}
        >
          Play Again
        </button>
      </div>
    </div>
  );
}

export default Result;