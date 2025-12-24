import { useState } from "react";
import Start from "./components/start";
import Quiz from "./components/quiz";
import Result from "./components/result";

function App() {

  const [screen, setScreen] = useState("start");
  const [score, setScore] = useState(0);
  const TOTAL_QUESTIONS = 10;

  return (
    <div className="app">
      {screen === "start" && (
        <Start 
          onStart={() => {
            setScore(0); 
            setScreen("quiz");
          }} 
        />
      )}

      {screen === "quiz" && (
        <Quiz 
          setScore={setScore} 
          onFinish={() => setScreen("result")} 
        />
      )}
      {screen === "result" && (
        <Result 
          score={score}
          totalQuestions={TOTAL_QUESTIONS}
          category="HTML" 
          onRestart={() => {
            setScore(0); 
            setScreen("start"); 
          }}
        />
      )}
    </div>
  );
}

export default App;
