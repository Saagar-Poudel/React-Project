// In this we are using usecallback  useref  useeffect

import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [numberallowed, setnumberallowed] = useState(false);
  const [charallowed, setcharallowed] = useState(false);
  const [password, setpassword] = useState("");

  //useref hook
  const passwordref = useRef(null);

  const passgenerator = useCallback(() => {
    // usecallback memorized the function
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";
    if (numberallowed) str += "0123456789";
    if (charallowed) str += "!@#$%^&*-_+=(){}[]~`";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setpassword(pass);
  }, [length, numberallowed, charallowed, setpassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordref.current?.select(); //used to show user some change on it like the text is selected
    //  passwordref.current?.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passgenerator();
  }, [length, numberallowed, charallowed]);
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 px-4">
      {/* <div className="min-h-screen flex items-center justify-center bg-gray-900  px-4"> */}
      <div className="w-full max-w-md mx-auto my-20 bg-gray-800 text-orange-400 rounded-xl shadow-lg p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center text-orange-400"> Password Generator </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            // className=" w-full py-1 px-3"
            className="w-full px-3 py-2 text-lg bg-gray-700 text-orange-300 "
            placeholder="Password "
            readOnly
            ref={passwordref}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-orange-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
          >
           
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-3">
          <div className="flex item-center gap-x-1">
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              onChange={(e) => {
                setlength(Number(e.target.value));
              }}
              className="cursor-pointer accent-orange-500 "
            />
            <label>Length :{length}</label>
          </div>
          <div className="flex text-sm gap-x-3">
            <label>
              <input
                type="checkbox"
                checked={numberallowed}
                onChange={() => {
                  setnumberallowed((prev) => !prev);
                }}
              />
              Number
            </label>
          </div>
          <div className="flex text-sm gap-x-3">
            <label>
              <input
                type="checkbox"
                checked={charallowed}
                onChange={() => {
                  setcharallowed((prev) => !prev);
                }}
              />
              Character
            </label>
          </div>
        </div>
        <button
          onClick={passgenerator}
          // className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          className="w-full bg-orange-500  hover:bg-yellow-600 text-white py-2 rounded-lg text-lg font-semibold "
         // className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white py-2 rounded-lg text-lg font-semibold transition duration-200"
        >
          {" "}
          Generate password{" "}
        </button>
      </div>
      </div>
      
    </>
  );
}

export default App;



