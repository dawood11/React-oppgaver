const Button = ({ svarAlternativ, setPoengFunksjon }) => {
	return (
		<button
			onClick={setPoengFunksjon}
			style={{ margin: "2%" }}
		>
			{svarAlternativ.svar}
		</button>
	);
};

export default Button;
