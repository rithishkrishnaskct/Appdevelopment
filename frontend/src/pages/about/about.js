import React from 'react';
import './about.css';
// import {Link} from 'react-router-dom'
import Navbar from '../../components/layouts/navbar/Navbar';
import Footer from '../../components/layouts/footer/Footer';

const About = () => {
    return (
        <section>
            <Navbar darkTheme={ true } />
        <div className="about-us-page">
            <div className="containers">
                <div className="about">
                    
                </div>
                <div className="contents">
                    
                    <p className='contai'><b>Dear Readers,</b></p>
                    <p> 

                    </p>
                    <p className='consist'>
                    Welcome to Book Worm! Since our inception in 2022, we've been dedicated to unlocking the transformative power of literature. Our mission is to connect you with inspiring stories and valuable knowledge that educate and entertain. Our diverse collection spans various genres, including fiction, non-fiction, children's literature, and young adult novels, ensuring there's something for every reader. We offer personalized recommendations, exclusive content like author interviews and book reviews, and prioritize a delightful reading experience. At Book Worm, we celebrate literary diversity, prioritize customer satisfaction, and are committed to eco-friendly practices. Join our dynamic community, engage in book clubs, and discover your next favorite read with us. Thank you for choosing Book Worm! 
                    </p>
                <p className='dark'><b>Happy Closing!</b></p>
                </div>
            </div>
        </div>
        <Footer/>
        </section>
    );
};

export default About;