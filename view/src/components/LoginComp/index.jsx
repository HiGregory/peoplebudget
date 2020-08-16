import React, { useState, useRef } from 'react';
import Input from '../Inputv3/index';
import Navbar from '../Navbar/index';
import { Link } from 'react-router-dom';
import {
    nav,
    imageContainer,
    container,
    wrapper,
    compContainer,
    welcome,
    button,
    hr,
    or,
    linkedinSignIn,
    lineContainer,
    input2,
    signin,
    linkText
} from './index.module.css';

const LoginComp = () => {
    return (
        <div className={`${container}`}>
            <div className={`${nav}`}>
                <Navbar
                    options={[
                        { text: 'home', link: '/', auth: 0 },
                        { text: 'register', link: '/register', auth: 0 }
                    ]}
                />
            </div>
            <div className={`${wrapper}`} border-style shadow>
                <div className={`${imageContainer}`}></div>
                <div className={`${compContainer}`}>
                    <div className={`${welcome}`}>
                        <h1>welcome back!</h1>
                    </div>
                    <div className={`${linkedinSignIn}`}>
                        <Link to="/login">
                            <button
                                className="button"
                            >
                                Sign in with LinkedIn
                            </button>
                        </Link>
                    </div>
                    <div className={`${lineContainer}`}>
                        <hr className={`${hr}`}></hr>
                        <div className={`${or}`}>OR</div>
                        <hr className={`${hr}`}></hr>
                    </div>
                    <div className={`${input2}`}>
                        <Input
                            name="email"
                            className="form-control"
                            type="email"
                            placeholder="Email"
                        />
                        <Input
                            name="password"
                            className="form-control"
                            type="password"
                            placeholder="Password"
                        />
                        <div className={`${signin}`}>
                            <Link to="/proposals">
                            <button
                                className="button"
                            >
                                Sign in
                            </button>
                            </Link>
                            <Link className={`${linkText}`} to="/register">
                                Not a member?
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginComp;