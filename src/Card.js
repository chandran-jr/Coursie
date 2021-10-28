import React from 'react';
import './Card.css';

function Card({courseId, courseName, provider, uni, parentSub, childSub, url, nextSesh, length, vidUrl}) {
    return (
        <div className="Card">

            <a href={vidUrl} target="_blank" rel="noreferrer" className="vidUrl">

            <div className="idDate">
            <h4 className="courseId">{courseId}</h4>
            <h4 className="nextSesh">{nextSesh}</h4>
            </div>

            <h4 className="provider">{provider}</h4>

            <a className="courseLink" href={url} rel="noreferrer" target="_blank">
            <h2 className="courseName">{courseName}</h2>
            </a>


            <h4 className="uni">{uni}</h4>

            <div className="childParentTitle">
            <h5>Parent Subject</h5>
            <h5>Child Subject</h5>
            </div>

            <div className="childParent">
            <h5>{parentSub}</h5>
            <h5>{childSub}</h5>
            </div>

            </a>

        </div>
    )
}

export default Card
