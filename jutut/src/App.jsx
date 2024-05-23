import React from "react";
import ReactDOM from "react-dom";

function App() {
  const [items, setItems] = useState(["Thing 1", "Thing 2"]);
  const [count, setCount] = useState(2);

  const handleClick = () => {
    console.log("hello");
    setItems(prevItems => [...prevItems, `Thing ${count + 1}`]);
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Add Item</button>
      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default App;