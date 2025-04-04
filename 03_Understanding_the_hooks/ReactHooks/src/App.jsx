// We will be using the useState hook to update the ui when we click on increase or decrease value button.
import { useState } from "react";

function App() {
  // this useState hook usually takes a default value it can be a number, object , or a string or anything.
  //  So here let say the default value is 15.
  // Now this useState hook usaully returns an array in which at the 0th index we receive the default value that we passed to the useState hook in a variable here we named it counter (you can name any) and we have make it 'let' so that we can change it's value and in the 1st index we get an function which we have name 'setCounter' (you can name any) this function will be responsible for updating the value of the counter variable .

  let [counter, setCounter] = useState(15);

  const addValue = () => {
    // update the counter by 1.
    setCounter(counter + 1);
  };

  const decreaseValue = () => {
    // decrease the counter by 1.
    // if else logic taki value does not goes into minus.
    if (counter == 0) {
      setCounter(0);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>hello pradeep ji</h1>
      {/* here whereever we are showing the live counter value it will be reflected in the ui as well. */}
      <button onClick={addValue}>Increase {counter}</button>
      <br />
      <button onClick={decreaseValue}>Decrease Value {counter}</button>

      <p>footer :{counter}</p>
    </>
  );
}

export default App;
