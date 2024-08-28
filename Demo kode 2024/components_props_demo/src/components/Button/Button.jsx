export const Button = ({text, styles, children}) => {

    const alertButtonClicked = () => {
        alert("Gratulerer med dagen som var!!")
    };

    console.log(children);
  return (
    <>
        <button onClick={alertButtonClicked} style={{padding: '10px', margin: '5px', ...styles}}>
            {text === undefined ? children : text}
        </button>
    </>
  )
}