import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

import budhist from './budhist.jpg';

import culture1 from './culture1.jpg';
import istock3 from './istock3.jpg'
import istock5 from './istock5.jpg'
import istock6 from './istock6.jpg'
import istock7 from './istock7.jpg'
import culture6 from './culture6.jpg';
import myan from './myan.jpg';
import { Link } from 'react-router-dom';
import explore from './explore-icon.png'
const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    
    <div className="container-fluid mx-md-5 my-5 px-md-5 py-5">
    <div className="row">
        <div className="col-md-6 mb-5">
            <div className="mx-3 my-3 px-3 py-3">
                <h2>Unique Tradition of Myanmar</h2>
                <p className="mt-3">
                    Thanks in part to its geography, Myanmar has some of the most unique traditions and ranks among the most culturally distinctive countries in Asia – one of those places you travel in where every day brings novelty and fascination. For those yet to discover Southeast Asia’s quirkiest and most unique nation, we’ve picked out some of its more weird and wonderful traditions and cultural traits.
                </p>
                <div className="d-flex justify-content-center">
                    <Link to="/month" className="btn rounded-pill my-4 text-light" style={{ backgroundColor: '#709090', color: '#333' }}>Browse</Link>
                </div>
            </div>

            <div className="floating-images">
                <img src={myan} alt="Floating Image 1" data-aos="fade-up"/>
                <img src={culture1} alt="Floating Image 1" data-aos="fade-up"/>
                <img src={culture6} alt="Floating Image 2" data-aos="fade-up" data-aos-delay="200" />
            </div>
        </div>

        <div className="col-md-6 mb-5">
            <div className="mx-3 my-3 px-3 py-3">
                <Carousel fade indicators={false} touch>
                    <Carousel.Item>
                        <img className="d-block w-100 h-100" src={istock5} alt="First slide" style={{ width: '100%', height: 'auto' }}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100 h-100" src={istock6} alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100 h-100" src={istock7} alt="Second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100 h-100" src={istock3} alt="Second slide" />
                    </Carousel.Item>
                </Carousel>
            </div>
            <Link to="/month" style={{ textDecoration: 'none' }}>
                <div className='card card-body border border-none shadow-3 rounded-5' style={{ backgroundColor: 'rgba(218,221,225, 0.5)' }}>
                    <h1 className='text-dark'>Let's Explore Together . . 
                        <img src={explore} style={{width: '50px', height: '50px'}}/>
                    </h1>
                </div>
            </Link>
        </div>
    </div>
</div>

      );
  
};

export default HomePage;
