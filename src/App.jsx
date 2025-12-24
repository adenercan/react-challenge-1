import { useState } from "react";
import Start from "./components/start";
import Quiz from "./components/quiz";
import Result from "./components/result";

function App() {
  const [screen, setScreen] = useState("start");
  const [score, setScore] = useState(0);
  const TOTAL_QUESTIONS = 10;
  const renderScreen = () => {
    switch (screen) {
      case "start":
        return (
          <Start 
            onStart={() => {
              setScore(0); 
              setScreen("quiz");
            }} 
          />
        );

      case "quiz":
        return (
          <Quiz 
            setScore={setScore} 
            onFinish={() => setScreen("result")} 
          />
        );

      case "result":
        return (
          <Result 
            score={score}
            totalQuestions={TOTAL_QUESTIONS}
            category="Accessibility" 
            onRestart={() => {
              setScore(0); 
              setScreen("start"); 
            }}
          />
        );

      default:
        return <Start onStart={() => setScreen("quiz")} />;
    }
  };

  return (
    <div className="app">
      {renderScreen()}
    </div>
  );
}

export default App;