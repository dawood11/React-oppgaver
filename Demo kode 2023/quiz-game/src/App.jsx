import "./App.css";

import { useEffect, useState } from "react";

import Button from "./components/Button/Button";
import quizList from "./quizList.json";

const App = () => {
	const [poeng, setPoeng] = useState(0);
	const [quizElementTeller, setQuizElementTeller] = useState(0);
	const [gameMode, setGameMode] = useState(false)
	const [quiz, setQuiz] = useState(quizList[quizElementTeller]);

	useEffect(() => {
		if (quizElementTeller === quizList.length) {
			setGameMode(false);
		}
	}, [quizElementTeller]);

	const setPoengFunksjon = (svarAlternativ) => {
		if (svarAlternativ.korrekt === true) {
			setPoeng((prevState) => prevState + 1);
		} else {
			setPoeng((prevState) => prevState - 1);
		}

		setQuizElementTeller(quizElementTeller + 1);
		setQuiz(quizList[quizElementTeller]);
	};

	return (
		<div className="App">
			<h1>Quiz game</h1>
			{
				gameMode === false
				? <button onClick={() => setGameMode(true)}>Start spillet</button>
				: <>
					<p>Poeng: {poeng}</p>
					<h1>{quiz.spOrsmAl}</h1>
					{quiz.svarAlternativer.map(
						(svarAlternativ, index) => (
							<Button
								key={index}
								setPoengFunksjon={() => setPoengFunksjon(svarAlternativ)}
								svarAlternativ={svarAlternativ}
							/>
						)
					)}
				</>
			}
		</div>
	);
};

export default App;
