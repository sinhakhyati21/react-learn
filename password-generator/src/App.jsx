import { useState, useCallback, useEffect, useRef} from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false);
  const [charac, setCharac] = useState(false);
  const [password, setPassword] = useState("");

  const passref = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(number) str += "0123456789"
    if(charac) str += "`~!@#$%^&*()_-+={}[]|\/<>,.:;"
    for(let i = 1; i <= length; i++) {
        let char = Math.floor(Math.random() * str.length + 1)
        pass += str.charAt(char);
    }
    setPassword(pass)
  }, [length, number, charac, setPassword])
  const cpy = useCallback(() => {
    passref.current?.select();
    //sets\SelectionRange
    window.navigator.clipboard.writeText(password)
  }, [password])
  useEffect(() =>{
    passwordGenerator()
  }, [length, number, charac, passwordGenerator]);
  return (
    <div className='w-screen h-screen bg-gray-900 flex flex-col items-center justify-center'>

      <h1 className='text-4xl text-center text-white mb-8'>
        Password Generator
      </h1>

        <div className="w-full max-w-xl shadow-md rounded-lg px-4 py-4 text-orange-400 bg-gray-600 flex flex-col gap-4">
          <input type="text" readOnly className="bg-white rounded-lg px-3 py-2 w-full outline-none" value={password} ref={passref}></input>
          <button onClick={cpy}></button>
          <div className="flex gap-4" min = {8} max={32}>
            <input type="range" className="cursor-pointer" defaultValue={length} min={4} max={50} id="rg"
            onChange={() => {
              setLength((l) => rg.value);
            }}></input>
            <label>Length: {length} </label>
            
            <label>Number: </label>
            <input type="checkbox" defaultChecked={number} id="nb"
            onChange={() => {
              setNumber((prev) => !prev);
            }}></input>

            <label>Special Characters: </label>
            <input type="checkbox" defaultChecked={charac} id="sc"
            onChange={() => {
              setCharac((prev) => !prev);
            }}></input>
            
          </div>
        </div>
    </div>
  )
}

export default App
