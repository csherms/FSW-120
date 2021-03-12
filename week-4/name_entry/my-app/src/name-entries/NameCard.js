import React from 'react';

const NameCard = ({ fullName }) => {

    return (
        <div>
            <li>
                <h1>{fullName}</h1>
            </li>
        </div>
    );
}

export default NameCard;