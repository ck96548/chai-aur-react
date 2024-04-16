import { useCallback, useEffect, useRef, useState } from "react";


function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordref = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str = str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length+1);
      pass += str.charAt(char);
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipBoard = useCallback(()=>{
    passwordref.current?.select();
    passwordref.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordref}
          />
          <button onClick={copyPasswordToClipBoard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
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
            onChange={(e)=>{
              setLength(e.target.value)
            }}
            />
            <label>Length:{length}</label>

          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onClick={()=>{
              setNumberAllowed(prevState => !prevState);
            }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
            defaultChecked={charAllowed}
            id="numberInput"
            onClick={()=>{
              setCharAllowed(prevState => !prevState);
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
