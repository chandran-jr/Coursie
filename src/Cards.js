import React from 'react';
import './Cards.css';
import Card from './Card.js';

function Cards() {
    return (
        <div className="Cards">
            <Card 
            courseId="301"
            courseName="Introduction to Artificial Intelligence"
            provider="Udacity" />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    )
}

export default Cards
