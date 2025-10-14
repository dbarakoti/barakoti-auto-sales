import React from 'react';
import logo from '../assets/barakoti_auto_logo.png';

const Career = () => {
    return (

        <div style={{position: 'relative', overflow: 'hidden'}}>
            <div
                style={{
                    backgroundImage: `url(${logo})`,
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    opacity: 0.05, // Faded effect
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 0
                }}
            />

            <div
                style={{
                    position: 'relative',
                    zIndex: 1,
                    padding: '3rem',
                    textAlign: 'center',
                    maxWidth: '800px',
                    margin: '0 auto',
                    color: '#777'
                }}


            >


                <h1>Career</h1>
                <p>
                    Thank you for your interest in joining our team. We don’t have any openings available at the moment,
                    but we encourage you to check back periodically for future opportunities.

                </p>
<               /div>
                </div>
    )
        ;
};

export default Career;