import { useState } from "react";
import Start from "./components/start";
import Quiz from "./components/quiz";
import Result from "./components/result";
function App() {
  const [screen, setScreen] = useState("start");
  const [score, setScore] = useState(0);
  
  return (
    <>
    <div className="app">

    {screen === "start" && (
      <div>
        <h1>Frontend Quiz</h1>
        <p>Test your frontend knowledge</p>

        <button onClick={() => setScreen("quiz")}>
          Start Quiz
        </button>
      </div>
    )}

    {screen === "quiz" && (
      <div>
        <h1>Quiz Screen</h1>

        <button onClick={() => setScreen("result")}>
          Finish Quiz
        </button>
      </div>
    )}

    {screen === "result" && (
      <div>
        <h1>Result Screen</h1>
        <p>Score: {score}</p>

        <button onClick={() => {
          setScore(0);
          setScreen("start");
        }}>
          Restart
        </button>
      </div>
    )}

      </div>
    </>
  )
}

export default App
