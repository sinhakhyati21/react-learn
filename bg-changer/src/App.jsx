import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 py-1">
        <div className="flex flex-wrap justify-center px-5 py-3 gap-3 shadow-xl bg-white rounded-full">
          <button className="bg-red-500 text-white rounded-full px-5 py-2 shadow-lg"
            onClick={() => setColor("red")}>RED
          </button>
          <button className="bg-blue-500 text-white rounded-full px-5 py-2 shadow-lg"
            onClick={() => setColor("blue")}>BLUE
          </button> 
          <button className="bg-green-500 text-white rounded-full px-5 py-2 shadow-lg"
            onClick={() => setColor("green")}>GREEN
          </button> 
          <button className="bg-[#808000] text-white rounded-full px-5 py-2 shadow-lg"
            onClick={() => setColor("olive")}>OLIVE
          </button> 
          <button className="bg-purple-500 text-white rounded-full px-5 py-2 shadow-lg"
            onClick={() => setColor("purple")}>PURPLE
          </button>
          <button className="bg-pink-500 text-white rounded-full px-5 py-2 shadow-lg"
            onClick={() => setColor("pink")}>PINK
          </button>
          <button className="bg-gray-500 text-white rounded-full px-5 py-2 shadow-lg"
            onClick={() => setColor("gray")}>GRAY
          </button>
          <button className="bg-black text-white rounded-full px-5 py-2 shadow-lg"
            onClick={() => setColor("black")}>BLACK
          </button> 
        </div>
      </div>
    </div>
  )
}

export default App
