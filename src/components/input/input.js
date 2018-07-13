import React from 'react';
import './input.css';

const input = (props) => {
    return (
        <div className="form-inputs">
            <label className="form-inputs__label">{props.namePeople}</label>
            <input className="form-inputs__input" type={props.type} onChange={props.changed} value={props.value} name={props.name}/>
        </div>
    );
}

export default input;