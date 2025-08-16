import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="header">
      <div className="img">
        {/* <img src="./img/krishna.png" alt="" /> */}
      </div>
      <div className="greet">
      <div className="item"> <h1> HAPPY KRISHNA JANMASTAMI
        <p>-by anubhav mishra
          (department of post)
        </p>
       </h1>
       
       </div>
       <div className="item" id="i1">
        <img src="/mypic.jpg" alt="" />
       </div>
      </div>
    </div>
    </>
  )
}

export default App
