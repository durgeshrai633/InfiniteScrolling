import { useEffect, useState } from "react";
import "./styles.css";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [state, setState] = useState([]);
  const [start, setStart] = useState(1);
  useEffect(() => {
    let newItems = [];
    for (let i = start; i < start + 25; i++) {
      newItems.push("Masai Student - " + i);
    }
    setState((prev) => [...prev, ...newItems]);
  }, [start]);
  const doScroll = () => {
    setStart((prev) => prev + 25);
  };
  window.onscroll = function () {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      doScroll();
    }
  };
  return (
    <div className="App">
      <div style={{ border: "2px solid red", padding: "20px" }}>
        <h1>Infinite scrolling</h1>
        <div>
          {state.map((item) => {
            return <h2 key={uuidv4()}>{item}</h2>;
          })}
        </div>
      </div>
    </div>
  );
}
