import React from 'react';
import logo from '../assets/barakoti_auto_logo.png';

const AboutUs = () => {
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


                <h1>About Us</h1>
                <p>
                    Barakoti Auto Sales is committed to providing exceptional car buying experiences. We offer
                    excellent
                    financing options and after-sales service for your vehicles. Be sure to visit our virtual
                    showroom
                    of inventory
                    available for purchase. There you will see detailed information about each vehicle, a picture
                    gallery, as well as convenient
                    ways to contact us for more information.

                </p>
                <h2>Our Mission</h2>
                <p>
                    Buying vehicles is one of the biggest investments for many Americans, and we want to give
                    value
                    for every dollar you spend. We show transparency in every transaction.

                </p>
                <p>
                    Thank you for visiting!
                </p>


                <div className="text-center mt-5">
                    <a className="btn btn-primary me-5" href="/inventory">Browse Inventory</a>
                    <a className="btn btn-primary me-5" href="/apply">Apply for Financing</a>
                    <a className="btn btn-primary me-5" href="/contact">Contact Us</a>
                </div>

            </div>
        </div>
    )
        ;
};

export default AboutUs;