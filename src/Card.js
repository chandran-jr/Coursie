import React from 'react';
import './Card.css';

function Card({courseId, courseName, provider, uni, parentSub, childSub, url, nextSesh, length, vidUrl}) {
    return (
        <div className="Card">
            <h4>{courseId}</h4>
        </div>
    )
}

export default Card
