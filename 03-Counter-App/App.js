import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

const App = () =>{
  return (
		<div>
			<h1>Counter App</h1>
			<Counter />
		</div>
	);
}

const Counter = () => {
  const [count, setCount] = useState(0);
  
function handleClick(){
  setCount(count +1);
}
  
	return (
		<div className='container'>
				<h2>{count}</h2>
			<div className='btn'>
				<button className='counter-btn' onClick={handleClick}>+</button>
				<button className='counter-btn' onClick={() =>{
          if(count > 0){
            setCount(count - 1)
          }
        }}>-</button>
			</div>
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)