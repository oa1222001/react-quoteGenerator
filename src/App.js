import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [advice, setAdvice] = useState("");
  useEffect(() => {
    fetchAdvice();
  }, []);

  const fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => {
        setAdvice(res.data.slip.advice);
      })
      .catch();
  };
  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button
          className="button"
          onClick={() => {
            fetchAdvice();
          }}
        >
          <span>Give me Advice</span>
        </button>
      </div>
    </div>
  );
}

export default App;
