import React from 'react';
import './Person.css';

const person  = (props) =>{
    return (
        <div className="Person">
            <p onClick={props.click}>Helllo my name is {props.name} and my Age is {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>

    )
};

export default person;