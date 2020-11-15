import React from 'react';
import '../App.css';
import List from './list';

const Skills = () => {
    return (
        <ul className="skills">
            <List labelfor="html" language="HTML" value="70" id="html"/>
            <List labelfor="css" language="CSS" value="60" id="css"/>
            <List labelfor="js" language="Java Script" value="75" id="js"/>
            <List labelfor="node" language="Node JS" value="50" id="node"/> 
            <List labelfor="mongo" language="MongoDB" value="50" id="mongo"/>
            <List labelfor="sql" language="SQL" value="50" id="sql"/>
        </ul>
    );
}

export default Skills;