"use client";
import { useState } from "react";
const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="flex flex-col justify-center items-center mt-10">
        <h1 className="text-center">Counter {counter} </h1>

      <div className="mt-10 w-56 grid grid-cols-2 gap-5">
        <button className="btn btn-accent" onClick={() => setCounter(counter + 1)}>Increase</button>
        <button className="btn btn-accent" onClick={() => setCounter(counter - 1)}>Decrease</button>
      </div>
    </div>
  );
};

export default Counter;
