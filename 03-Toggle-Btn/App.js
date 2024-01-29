/*
Toggle Button: Develop a toggle button that changes its state with the useState hook when clicked. It should change between "On" and "Off" states.
*/
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const ToggleBtn = () =>{

  const [toggle, setToggle] = useState('OFF')

  function handleToggle(){
    setToggle(toggle === 'ON' ? 'OFF' : 'ON')
  }

  return (
  <div className='container'>
    <button className="btn off" onClick={handleToggle}>{toggle}</button>

  </div>);
}


const App = ()=>{
  return(
    <div>
      <ToggleBtn/>
    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)