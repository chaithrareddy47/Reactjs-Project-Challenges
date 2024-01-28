import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const dummyData = [
	{
		id: 1,
		username: 'Joy',
		imageUrl:
			'https://img.freepik.com/free-photo/cartoon-character-with-yellow-jacket-sunglasses_71767-101.jpg?w=740&t=st=1706435798~exp=1706436398~hmac=d130e7d7a7cf4db6f35b420144297aa3a07c2491b864447e23feee32deb182ca',
		greetings: 'Good evening! Relax and unwind with our content.',
	},
	{
		id: 2,
		username: 'Selena',
		imageUrl:
			'https://img.freepik.com/free-vector/lovers-couple-sending-heart-happy-valentine-cartoon-character-illustration_56104-395.jpg?w=900&t=st=1706435840~exp=1706436440~hmac=743a1f50d21f6159426a2aa511a7949d312cab72f461b583094d803e8ff8c206',
		greetings: "Season's greetings! Wishing you joy and happiness.",
	},
	{
		id: 3,
		username: 'Jhon',
		imageUrl:
			'https://img.freepik.com/free-photo/cute-ai-generated-cartoon-bunny_23-2150288881.jpg?t=st=1706435930~exp=1706439530~hmac=a07f5123733454f7d2736af725fb9254e9ca20dc7a53d65a81c2b605c364a5f2&w=740',
		greetings: 'Happy weekend! Make the most of your leisure time.',
	},
	{
		id: 4,
		username: 'Taylor',
		imageUrl:
			'https://img.freepik.com/free-vector/hand-drawn-cartoon-panda-illustration_23-2150513520.jpg?w=740&t=st=1706435889~exp=1706436489~hmac=24fa4383a04bbf78f7a403f4aedc3713583515e0ca271a8acaf5e4ccf54f8788',
		greetings: "Welcome aboard! We're delighted to have you here.",
	},
];
const UserForm = ()=>{
	const [userText, setUserText] = useState('');
	const [greetings, setGreetings] = useState(false);
	const [error, setError] = useState('');

	function handleInput() {
		const user = dummyData.find(
			(data) => data.username.toLowerCase()  === userText.toLowerCase()
		);
		console.log(user);

		if (user) {
			setGreetings(true);
			console.log('user NAME MACHED ');
		}else{
			setGreetings(false)
			setError('No matching username. Please try again.');
			console.log('not match username');
		}
	}
	
  return (
		<div className='container'>
			<input
				className='input-container'
				placeholder='Enter Name'
				value={userText}
				onChange={(e) => setUserText(e.target.value)}
			/>
			<p>Text entered : {userText}</p>
			<button
				className='btn-container'
				onClick={handleInput}>
				Check username
			</button>

			{
				error && (
					<div style={{color:'red' }}>{error}</div>
				)
			}
			{  
				greetings && (
				<div>
					Greetings : Hello{' '}
					<span style={{ color: 'orange', fontFamily: 'cursive' }}>
						{userText}!{' '}
					</span>
					{
						dummyData.find(
							(data) => data.username.toLowerCase() === userText.toLowerCase(),
						)?.greetings
					}
					<img
						className='img-container'
						src={
							dummyData.find(
								(data) => data.username.toLowerCase === userText.toLowerCase,
							)?.imageUrl
						}
						alt=''
					/>
				</div>
			)}
		</div>
	);
}



const App = ()=>{
  return (
		<div>
			<UserForm />
			
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)