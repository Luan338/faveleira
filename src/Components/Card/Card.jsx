import React from 'react';
import "./Card.css";

export const Card = ({ text, paragraph }) => {
    return (
        <div>
            <strong>{text}</strong>
            <p>{paragraph}</p>
        </div>
    )
}

