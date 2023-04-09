import { useState } from "react";
import AddItem from "./AddItem";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let data = [
    {
      title: "item 1",
      id: 1,
    },
    {
      title: "item 2",
      id: 2,
    },
    {
      title: "item 3",
      id: 3,
    },
  ];
  const [arr, setArray] = useState(data);
  const addItem = (el) => {
    const newEl = {
      title: el.title,
      id: arr.length + 1,
    };
    setArray([...arr, newEl]);
  };
  const delItem = (id)=>{
    const newArr=arr.filter(el=>el.id!=id);
    setArray(newArr);
  }
  return (
    <div className="App">
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is</button>
        {count}
        <button
          onClick={() =>
            setCount((count) => {
              if (count == 0) {
                return 0;
              }
              return count - 1;
            })
          }
        >
          delete
        </button>
      </div>
      <AddItem arr={arr} addItem={addItem} delItem={delItem}/>
    </div>
  );
}

export default App;
