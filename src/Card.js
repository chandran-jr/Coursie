import React from 'react';
import './Card.css';

function Card({courseId, courseName, provider, uni, parentSub, childSub, url, nextSesh, length, vidUrl}) {
    return (
        <div className="Card">
            <h4 className="courseId">{courseId}</h4>
            <h4 className="provider">{provider}</h4>
            <h3 className="courseName">{courseName}</h3>
        </div>
    )
}

export default Card
