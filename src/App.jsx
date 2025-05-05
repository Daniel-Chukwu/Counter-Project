import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count >= 100 ? (count = 100) : count + 1);
  const decrement = () => setCount(count <= 0 ? (count = 0) : count - 1);
  const EdgeCases = () => {
    if (count === 0 || count === 100) {
      return <p>You have reached the limit !!!</p>;
    }
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
      <EdgeCases />
    </div>
  );
};

export default App;
