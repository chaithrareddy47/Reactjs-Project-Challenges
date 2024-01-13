import React, { useState } from "react";
import  ReactDOM  from "react-dom/client";
import { useState } from "react";
import { IMG_URL } from "./constants/config";
import greetingsData from "./constants/mockData";


const App = ()=>{
	return (
		<div>
			<FormComponenet/>
		</div>
	)}

const FormComponenet = ()=>{
	const [userName, setUserName] = useState('');

	const defaultImageUrl = IMG_URL;

	const handleInputChange = (e) =>{
	
		setUserName(e.target.value);
	}
	return (
		<div className='form-container'>
			<div>
				<input
					type='text'
					placeholder='Enter Your Name'
					value={userName}
					onChange={handleInputChange}
					className='input-container'
				/>
				<Greeting
					userName={userName}
					greetingsData={greetingsData}
				/>
			</div>

			<div className="image-container">
				{
					userName ? (<img src={greetingsData.find((data) => data.name.toLowerCase() === userName.toLowerCase()) ?.imageUrl || defaultImageUrl} alt=""/> ) : (
						<img src={defaultImageUrl} alt=""/>
					)
				}
			</div>
		</div>
	);}

	// greeting compoennet responsible for dispaying message and image 
	const Greeting = ({userName, greetingsData })=>{
		const greeting = greetingsData.find((greeting) => (greeting.name.toLowerCase() === userName.toLowerCase()));

		return(
			<div className="userName">
			   {
					userName && (
						<p>{greeting ? greeting.message : `Hello , ${userName}! Nice to meet you`}</p>
					)
				 }

			</div>
		)
	}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)