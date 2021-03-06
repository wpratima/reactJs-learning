import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import MovieScroller from '../MovieScroller';

const slideImages = [
    '/mov1.PNG',
    '/images2.jpg',
    '/images3.jpg',
    '/images4.jpg',
];
const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
};

export default function Home() {
    return (
        <div style={{display:'flex'}} >
            <Slide {...properties}>
                {slideImages.map((each, index) => (
                    <div key={index} style={{ height: 300 }} className="each-slide">
                        <div style={{
                            backgroundImage: `url(${each})`, height: '100vh', width: '100%', backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat', backgroundPosition: 'center'
                        }}>
                        </div>
                    </div>
                ))}
            </Slide>
            <h2 className='subHeading'>Continue Watching</h2>
            <MovieScroller/>
        </div>
    )
}
