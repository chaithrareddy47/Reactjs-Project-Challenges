import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

const Counter = () => {
	const [count, setCount] = useState(0);
	return (
		<div className='container'>
			<div className='counter'>
				<h1>{count}</h1>
			</div>
			<div className='btns'>
				<button
					onClick={() => {
						setCount((count) => count + 1);
					}}>
					+
				</button>
				<button
					onClick={() => {
						if (count > 0) {
							setCount((count) => count - 1);
						}
					}}>
					-
				</button>
			</div>
		</div>
	);
};

const App = () => {
	return (
		<div>
			<Counter />
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
