import React from 'react';
import Reviews from './ReviewList';
export default function Movie (props) {
    let title = props.title;
    let image = props.photo;
    let year = props.release_date

    return (
        <div className="card">
            <div> <img src={image} alt="test"/></div>
            <div>{title} / {year}</div>
            <div>
                <Reviews />
            </div>
        </div>
    )
}