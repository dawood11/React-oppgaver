import { Button } from "./Button";

const SecondaryButton = (props) => {

  return (
    <div>
        <Button text={props.text} styles={{ backgroundColor: 'yellow'}}/>
    </div>
  )
}

export default SecondaryButton;