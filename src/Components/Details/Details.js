import React from 'react';
import DetailsPrice from './DetailsPrice/DetailsPrice';

const Details = (props) => {
    return (
        <div>
            <h1>Details : {props.name}</h1>
            <DetailsPrice price={props.price} ></DetailsPrice>
        </div>
    );
};

export default Details;