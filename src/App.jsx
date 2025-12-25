import { useState } from "react";
import Start from "./components/start";
import Quiz from "./components/quiz";
import Result from "./components/result";
import Header from "./components/header";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { isDarkMode } = useTheme();
  const [screen, setScreen] = useState("start");
  const [score, setScore] = useState(0);
  const [category, setCategory] = useState("");

  const HandleStartQuiz = (selectedCategory) => {
    setCategory(selectedCategory);
    setScore(0);
    setScreen("quiz");
  };

  return (
    <div className={`min-h-screen transition-all duration-300 ${isDarkMode ? 'dark bg-[#313E51]' : 'bg-[#F4F6FA]'}`}>
      <Header category={category} />
      <main className="flex flex-col items-center">
        {screen === "start" && <Start onStart={HandleStartQuiz} />}
        {screen === "quiz" && (
          <Quiz 
            category={category}
            setScore={setScore} 
            onFinish={() => setScreen("result")} 
          />
        )}
        {screen === "result" && (
          <Result 
            score={score}
            totalQuestions={10} // Sorular dosyanızdaki soru sayısına göre güncellenebilir
            category={category}
            onRestart={() => {
              setScore(0); 
              setCategory("");
              setScreen("start"); 
            }}
          />
        )}
      </main>
    </div>
  );
}

export default App;