import { useState } from "react";
import "./App.css";


function App() {
  const [count, setcount] = useState(0);
  function decreaseHandler() {
    setcount(count - 1);
  }
  function increaseHandler() {
    setcount(count + 1);

  }
  function resetHandler() {
    setcount(0);

  }

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center items-center bg-[#344151] gap-10">
      <div className="text-[#0398d4] font-medium text-2xl">Increment & Decrement</div>

      <div className="bg-white flex items-center justify-center gap-12 rounded-sm py-3 text-[25px] text-[#344151] ">
        <button onClick={decreaseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">
          -
        </button>
        <button  className="font-bold gap-12 text-5xl">
            {count}
        </button>
        <button onClick={increaseHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">
          +
        </button>
      </div>
      <div>
        <button onClick={resetHandler} className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg">
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
