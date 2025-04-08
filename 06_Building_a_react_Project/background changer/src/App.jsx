import { useState } from "react";

import "./App.css";

//dekho css to tum dekh lena in chatgpt ki classes ka kya use hai .
// yaha dekho color change karne k liye we are using useState to jaise hi button mein click hoga we can call useState to simple yahi logic hai.
// Ab dekho  onClick() kaise kaam karta hai wo dekho.
//  In onclick we can pass the following -:
/* 1.Pass a function(if no argument) to onClick.

2. Use an arrow function(callback function) if you need to pass arguments.

imp-: The on click method in React expects a function reference. 
You can't directly pass parameters inside the function, instead, you need to pass it as a reference or use arrow function syntax

 Que-:What is the problem with passing the function directly with arugment without passing it as callback arrow function.
Ans-:onClick={handleClick("Alice")} → Function is called immediately when React renders the component.

onClick={() => handleClick("Alice")} → React sets the arrow function as the handler, and it gets executed only when the button is clicked.

So in below in our case we need to pass the color to handleClick function so we will pass it as an arrow function or we can say callback function.

*/

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
