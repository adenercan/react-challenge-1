import { useState } from "react";
import Start from "./components/start";
import Quiz from "./components/quiz";
import Result from "./components/result";

function App() {

  const [screen, setScreen] = useState("start");
  const [score, setScore] = useState(0);
  const [category, setCategory] = useState();
  const TOTAL_QUESTIONS = 5;
  const HandleStartQuiz = (selectedCategory) => {
    setCategory (selectedCategory);
    setScore (0);
    setScreen ("quiz");
  };

  return (
    <div className="app">
      {screen === "start" && (
        <Start 
          onStart={ HandleStartQuiz
          }
        />
      )}

      {screen === "quiz" && (
        <Quiz 
          category= {category}
          setScore={setScore} 
          onFinish={() => setScreen("result")} 
        />
      )}
      {screen === "result" && (
        <Result 
          score={score}
          totalQuestions={TOTAL_QUESTIONS}
          category={category}
          onRestart={() => {
            setScore(0); 
            setCategory("");
            setScreen("start"); 
          }}
        />
      )}
    </div>
  );
}

export default App;
