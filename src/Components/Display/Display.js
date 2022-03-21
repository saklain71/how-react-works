import React from 'react';
import Dial from '../Dial/Dial';

const Display = (props) => {
    return (
        <div style={{border:'1px solid green', margin:'10px'}}>
            <h3>Display {props.name} </h3>
            <p>so far steps : {props.step}</p>
            <Dial name='Dial' step={props.step}></Dial>
        </div>
    );
};

export default Display;