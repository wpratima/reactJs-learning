import React from 'react';
import './styles.css';


export default function Footer(){
    return(
        <div style={{backgroundColor:'#24303F', height:85}}>
            <div>
                <img src='/app_logo.png' className='app-logo' />
            </div>
            <div>
                <ul id="menu">
                    <li className='footerItems'>Terms and Privacy Notice</li>
                    <li className='footerItems'>Send us feedback</li>
                    <li className='footerItems'>Help</li>
                    <li className='copyright'>© 1996-2021, Amazon.com, Inc. or its affiliates</li>
                </ul>
            </div>
        </div>
    );

};