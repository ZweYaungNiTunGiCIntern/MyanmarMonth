import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-light text-dark py-4 footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                    </div>
                    <div className="col-md-4">
                        <p>Email: info@birdwebsite.com</p>
                    </div>
                    <div className="col-md-4">
                        <p>Phone: 123-456-7890</p> 
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-12 text-center">
                        <p>&copy; 2024 Bird Website. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
