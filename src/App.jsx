import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("black")


  return (
    // <>
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="flex justify-center items-center gap-4 fixed bottom-10 left-1/2 -translate-x-1/2">
        <button onClick={() => { setColor("blue") }} className="px-4 py-2 bg-blue-700 text-white rounded">Blue</button>
        <button onClick={() => { setColor("green") }} className="px-4 py-2 bg-green-500 text-white rounded">Green</button>
        <button onClick={() => { setColor("yellow") }} className="px-4 py-2 bg-yellow-500 text-black rounded">Yellow</button>
        <button onClick={() => { setColor("pink") }} className="px-4 py-2 bg-pink-500 text-black rounded">Pink</button>
      </div>
    </div >
    // </>
  );
}

export default App
