import { useState, useCallback, useRef, useEffect } from "react";
function App() {
  //first length ko set karne k lie we will use useState.
  const [length, setLength] = useState(8);
  // numberAllowed hai ya nahi password mein usko set karne k lie .
  const [numberAllowed, setNumberAllowed] = useState(false);
  // CharAllowed hai ya nahi password mein usko set karne k lie.
  const [charAllowed, setCharAllowed] = useState(false);
  // password ko change ya fir set karne k lie.
  const [password, setPassword] = useState("");

  // Function to generate random password.
  // This function is wrapped inside useCallback hook to cache the function and avoid unnecessary re-renders , hence to optimize the performance.

  const passwordGenerator = useCallback(() => {
    // final random password is pass variable mein store hoga.
    let pass = "";
    // isi string ko manipulate karke random password generate hoga.
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // if numberAllowed is true then add numbers to the string.
    if (numberAllowed) {
      str += "0123456789";
    }

    // if charAllowed is true then add characters to the string.
    if (charAllowed) {
      str += "!@#$%^&*-_+=[]{}~`";
    }

    //ab user jitna length dega input mein utne number of  times loop chahlo aur usi length ka random password generate karo.
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  //useRef hook.
  const passwordRef = useRef(null);

  // function that will help us to copy the password when we click on the copy button.

  const copyPasswordToClipboard = useCallback(() => {
    //password ko copy karte samay select effect dene k lie.
    passwordRef.current?.select();
    // This will only select the password
    passwordRef.current?.setSelectionRange(0, 99);

    // The line window.navigator.clipboard.writeText(password); is used to copy the password (or any string) to the clipboard in the user's browser
    window.navigator.clipboard.writeText(password);
  }, [password]);

  //using useEffect hook function(password generator ) automatically call ho jayega jab bhi ye mentioned dependencies mein change ayega.
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            //using ref keyword we provide the reference to this input field.
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>Length :{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
