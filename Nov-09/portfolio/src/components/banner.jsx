import React from 'react';
import '../App.css';
import Image from  './image';
import Name from './name';

const Banner = () => {
    return (
        <div className="banner">
            <Image />
            <Name />
        </div>
    );
}

export default Banner;
