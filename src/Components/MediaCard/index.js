import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';


export default function MediaCard(props) {
    console.log("props mediacard", props.image);
    return (
        <div style={{ padding: 10 }}>
            <Link to="/mediaDetails">
                <div className='card'>
                    <img src={props.image} className='image' />
                </div>
            </Link>
        </div>
    );
}