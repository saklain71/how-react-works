import React from 'react';

const Dial = (props) => {
    return (
        <div style={{border:'1px solid blue', margin:'10px'}}>
            <h3>This is {props.name}</h3>
            <p> steops so far : {props.step}</p>
        </div>
    );
};

export default Dial;