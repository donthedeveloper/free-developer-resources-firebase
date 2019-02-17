import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Admin from './Admin/Admin.react';
import Categories from './Categories/Categories.react';
import ForgotPassword from './ForgotPassword/ForgotPassword.react';
import Navbar from './Navbar/Navbar.react';
// import Profile from './Profile/Profile.react';
import Resources from './Resources/Resources.react';
import SignIn from './SignIn/SignIn.react';
import Signup from './Signup/Signup.react';
import './App.scss';

import Modal from './Modal/Modal.react';

const App = () => {
    return (
        <BrowserRouter>
            <div className='app'>
                <Modal>
                    Yay I exist!
                </Modal>
                <Navbar />
                <Switch>
                    <Route exact path='/resources' component={Categories} />
                    <Route path='/resources/:category' component={Resources} />
                    <Route path='/admin' component={Admin} />
                    {/* <Route path='/profile' component={Profile} /> */}
                    <Route path='/signin' component={SignIn} />
                    <Route path='/signup' component={Signup} />
                    <Route path='/forgot-password' component={ForgotPassword} />
                    <Redirect to='/resources' />
                </Switch>
            </div>
        </BrowserRouter>
    );
};

export default App;