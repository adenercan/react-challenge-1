import { useTheme } from "../context/ThemeContext";

function Header({ category }) {
  const { isDarkMode, toggleTheme } = useTheme();

  const iconMap = {
    "HTML": "src/assets/imgs/html-icon.svg",
    "CSS": "src/assets/imgs/css-icon.svg",
    "JavaScript": "src/assets/imgs/js-icon.svg",
    "Accessibility": "src/assets/imgs/accessibility-icon.svg"
  };

  return (
    <header className="flex justify-between items-center w-full max-w-6xl mx-auto p-6 md:py-12">
      <div className="flex items-center gap-4">
        {category && (
          <>
            <div className="p-2 bg-white dark:bg-[#3B4D66] rounded-xl shadow-sm">
              <img src={iconMap[category]} alt={category} className="w-8 h-8" />
            </div>
            <span className="text-xl font-bold text-[#313E51] dark:text-white">{category}</span>
          </>
        )}
      </div>
      
      <div className="flex items-center gap-3">
        <button 
          onClick={toggleTheme}
          className="w-12 h-6 bg-purple-600 rounded-full relative p-1 transition-all"
        >
          <div className={`w-4 h-4 bg-white rounded-full transition-all duration-300 ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}`} />
        </button>
      </div>
    </header>
  );
}

export default Header;