import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';
import React from 'react';
import initializeAuthentication from '../../Firebase/firebase.initialize';
import './Login.css';

initializeAuthentication();

const provider = new GoogleAuthProvider();

const Login = () => {

    const handleGoogleSignIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
    }

    return (
        <div className='login-body'>
            <div>
                <h2 className='login-text'>Login Here</h2>
                <input className='input-field' type="text" placeholder='Type Your Email' />
                <br />
                <input className='input-field' type="password" placeholder='Type Your Password' />
                <br />
                <button className='login-button'>Login</button>
                <br />
                <button
                    onClick={handleGoogleSignIn}
                    className='google-signin'>Google SignIn</button>
            </div>
        </div>
    );
};

export default Login;