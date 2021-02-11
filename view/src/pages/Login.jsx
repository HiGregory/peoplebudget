import React, { useState, useRef } from 'react';
import Input from '../components/Inputv2/index';
import Button from '../components/Button/index';
import { button } from '../components/Button/index.module.css';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar/index';
import Mapimg from '../miamiMapFaded.png';

const Login = () => {
    const [value, setValue] = useState('');
    const nameForm = useRef(null);

    const history = useHistory();

    const handleClickEvent = () => {
        const form = nameForm.current;
        //alert(`${form['email'].value} ${form['password'].value}`);
        history.push('/proposals');
    };

    return (
        <div className="container-fluid">
            <div className="row" style={{ height: '100%' }}>
                <div className="col-sm-3 border-0 bg-light p-0 vh-100" style={{backgroundImage: `url(${Mapimg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
                    {/* <img src={Mapimg} className="w-100 vh-100"  /> */}
                </div>
                <div className="col-sm-9 ">
                    <Navbar
                        options={[
                            { text: 'home', link: '/', auth: 0 },
                            { text: 'register', link: '/register', auth: 0 }
                        ]}
                    />
                    <div
                        className=""
                        style={{ position: 'relative', top: '5vh', bottom: '50vh', left: '1vh' }}
                    >
                        <div className="col-sm-8 border-0 ml-5 p-3">
                            <div className="row  mt-5">
                                <div className="col-sm-auto  ml-5 mb-4">
                                    <h1 className="text-capitalize">Welcome back!</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-8 pb-3">
                                    {' '}
                                    <Input
                                        name="email"
                                        className="form-control"
                                        type="email"
                                        placeholder="Email"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-8 pb-3">
                                    {' '}
                                    <Input
                                        name="password"
                                        className="form-control"
                                        type="password"
                                        placeholder="Password"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4 ml-auto" style={{left: '-33%'}}>
                                    {/* <Button
                                        className="btn btn-block active"
                                        onClick={handleClickEvent}
                                    >
                                        Login
                                    </Button> */}
                                    
                                    <Button
                                            color="#ee9623"
                                            radius=".6em"
                                            sidePadding="1em"
                                            centerPadding=".4em"
                                            width="15vw"
                                            height="6vh"
                                            onClick={handleClickEvent}
                                            shadow
                                        >
                                            Get Started
                                        </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
