import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [step, setStep] = useState(0);
    const increaseSteps = ()=>{
        const newStepsCount = step + 1 ;
        setStep(newStepsCount);  
        //console.log(step);  
    }

    useEffect(()=>{
        console.log(step);
    },[step])

    return (
        <div style={{border:'1px solid red', margin:'10px'}}>
            <h3>This is my Smart Watch</h3>
            <h4>my Current steps: {step}</h4>
            <button onClick={increaseSteps}>Run</button>
            <Display name='Garmin' step={step}></Display>
        </div>
    );
};

export default Watch;