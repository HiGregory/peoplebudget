import React, { useState, useRef } from 'react';
import Input from '../Inputv3/index';
import Select from '../Dropdown/index';
import Navbar from '../Navbar/index';
import axios from 'axios';
import { Form, FormGroup, Label } from 'reactstrap';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import {
    nav,
    imageContainer,
    container,
    wrapper,
    compContainer,
    welcome,
    hr,
    or,
    linkedinSignIn,
    lineContainer,
    inputContainer,
    input2,
    signup,
    linkText
} from './index.module.css';

const RegistrationComp = () => {
    return (
        <div className={`${container}`}>
            <div className={`${nav}`}>
                <Navbar
                    options={[
                        { text: 'home', link: '/', auth: 0 },
                        { text: 'login', link: '/login', auth: 0 }
                    ]}
                />
            </div>
            <div className={`${wrapper}`} border-style shadow>
                <div className={`${imageContainer}`}></div>
                <div className={`${compContainer}`}>
                    <div className={`${welcome}`}>
                        <h1>welcome!</h1>
                    </div>
                    <div className={`${linkedinSignIn}`}>
                        <Link to="/register">
                            <button className="button">Sign up with LinkedIn</button>
                        </Link>
                    </div>
                    <div className={`${lineContainer}`}>
                        <hr className={`${hr}`}></hr>
                        <div className={`${or}`}>OR</div>
                        <hr className={`${hr}`}></hr>
                    </div>
                    <div className={`${inputContainer}`}>
                        <Input
                            name="firstName"
                            className="form-control"
                            type="firstName"
                            placeholder="First Name"
                        />
                        <Input
                            name="lastName"
                            className="form-control"
                            type="lastName"
                            placeholder="Last Name"
                        />
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
                        <Select placeholder="Security Question" />
                        <Input
                            name="answer"
                            className="form-control"
                            type="answer"
                            placeholder="Answer"
                        />
                        <div className={`${signup}`}>
                            <Link to="/register">
                                <button className="button">Sign Up</button>
                            </Link>
                            <Link className={`${linkText}`} to="/login">
                                Already a member?
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationComp;
