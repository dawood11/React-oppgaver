import Button from './Button';
import React from 'react';

const PrimaryButton = (props) => {
 return (
    <Button onClick={props.onClick}>
        <h1>{props.children}</h1>
    </Button>
 );
};

export default PrimaryButton;