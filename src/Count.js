import React from 'react';

function Count({length}) {
    return (
        <div>
            <h3 className="header__courses">Courses found: {length}</h3>
        </div>
    )
}

export default Count
