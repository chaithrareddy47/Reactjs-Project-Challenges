import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react';


const App = () => {
	return (
  <div>
    <InputField/>
  </div>
  )
};


const InputField = ()=>{
  const [inputChange, setInputChange] = useState('');

  const handleInputChange = (e)=>{
    setInputChange(e.target.value)
  }

  const strength = 
  inputChange.length === 0 ? ' ' :
  inputChange.length >= 5 && /\d+/.test(inputChange) && /[a-zA-z]+/.test(inputChange) ? 'Strong' : inputChange.length >=3 ? 'Medium' : 'Weak';

  return (
		<div className='input-field'>
			
				<input
        className='input'
					type='text'
          placeholder='Enter Text'
          value={inputChange}
          onChange={handleInputChange}
				/>
        <h4 className='text'>Entered Text is : {inputChange}</h4>
        <h4 className='text'>Entered Text Length is : {inputChange.length}</h4>
        <h4 className='text'>Password strength is : {strength}</h4>
	
		</div>
	);
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)