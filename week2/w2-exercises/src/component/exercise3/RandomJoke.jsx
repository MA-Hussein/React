import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Joke from './Joke';

const RandomJoke = () => {
	const [ joke, setJoke ] = useState({});
	useEffect(() => {
		axios
			.get('https://official-joke-api.appspot.com/random_joke')
			.then((res) => {
				setJoke(res.data);
			})
			.catch((err) => console.log('Error', err));
	}, []);
	return (
		<div className="Joke">
			<Joke setup={joke.setup} punchline={joke.punchline} />
		</div>
	);
};

export default RandomJoke;
