import React from 'react';
import '../styles/toggle-button.css';

const ToggleButton = props => (
    <button className={`toggle-button ${props.mode}-mode`} onClick={props.onClick}>+</button>
);

export default ToggleButton;
