import { Button } from "./Button";

const PrimaryButton = ({text}) => {

  return (
    <div>
        <Button
          text={text}
          styles={{ backgroundColor: 'blue', color: 'white' }}
        />
    </div>
  )
}

export default PrimaryButton;