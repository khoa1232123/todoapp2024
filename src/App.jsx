import { useEffect, useId, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  const [count, setCount] = useState(0);

  // được sử dụng để thực thi các side Effect sau mỗi lần render hoặc sau khi component được cập nhật.

  useEffect(() => {}, [count]);

  return (
    <>
      <button onClick={() => setCount((prev) => prev + 1)}>Count</button>
      <Todo />
    </>
  );
}

export default App;
