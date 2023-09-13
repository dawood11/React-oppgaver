const Button = ({svarAlternativ, setPoengFunksjon, disabled}) => {
    return (
        <button disabled={disabled} onClick={setPoengFunksjon} style={{ margin: '2%'}}>
            {svarAlternativ.svar}
        </button>
    );
}

export default Button;
