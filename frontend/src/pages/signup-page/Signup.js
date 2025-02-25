import React from 'react';
import './signup.styles.css';
import img1 from '../../assets/auth-bg.png';
import Navbar from '../../components/layouts/navbar/Navbar';
import AuthForm from '../../components/forms/authForm/AuthForm';

const Signup = () => {
    return (
        <React.Fragment>
            <Navbar darkText={true}/>
            <section className="signup-container">
                <div className='signup-img-container'>
                    <img src={img1} alt="authentication-background" />
                </div>
                <div className="signup-content-container">
                    <div className="container">
                        <div className="content-wrapper">
                            <h2>Signup</h2>
                            <p>Create a new account with email and password.</p>

                            <AuthForm buttonName="Sign Up" />
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Signup;