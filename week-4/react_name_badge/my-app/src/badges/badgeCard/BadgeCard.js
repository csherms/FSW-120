import React from 'react';
import './badge-card.css';

const NameCard = ({ firstName, lastName, email, placeOfBirth, phone, favoriteFood, textArea }) => {

    return (
        <div>
            <h1 className="badge-title">Badge:</h1>
            <div className="container">
                <p className="badge-text">Name: {firstName} {lastName}</p>
                <p className="badge-text">Phone: {phone}</p>
                <p className="badge-text">Place of birth: {placeOfBirth}</p>
                <p className="badge-text">Favorite food: {favoriteFood}</p>
                <p className="badge-text">Email: {email}</p>
                <p></p>
                <p className="box">{textArea}</p>
                <div>
                    <img src={"https://lh3.googleusercontent.com/proxy/QJVxIZU34NW0pFGDEtBiPQQWMCAm3EkgKcm0955GX9jxXZCgHvckbj0cPO9Nudyiy6YCk288WS9YkWUKjhJerI8E7zvNnaVygZ9_VPh-q1qrTx0Ie08jtg8G5MI"} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default NameCard;