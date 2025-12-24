<<<<<<< HEAD
=======
import { useState } from "react";
import Start from "./components/start";
import Quiz from "./components/quiz";
import Result from "./components/result";
>>>>>>> b3c5472fcfd0d02dfea34a3e9ec9f0d9af0cb67c

function App() {

<<<<<<< HEAD
    </>
  )
=======
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
>>>>>>> b3c5472fcfd0d02dfea34a3e9ec9f0d9af0cb67c
}

export default App;
