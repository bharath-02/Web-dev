import React from 'react';
import '../App.css';
import img from './profile.jpg';

const Image = () => {
    return (
        <img src={img} alt='Profile-photo'/>
    );
}

export default Image;