import React from 'react';
import Reviews from './ReviewList';

export default function Movie (props) {
    let title = props.title;
    let image = props.image;
    let year = props.year;
    let genre = props.genre;

    return (
        <div className="card">
            <h2>{title}</h2>
            <div> <img src={image} width="150px" alt="test"/></div>
            <div>{genre} / {year}</div>
            <div>
                <Reviews />
            </div>
        </div>
    )
}