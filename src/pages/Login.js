import React from 'react'
import { auth, provider } from '../firebase/firebaseConfig'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import './Page.css'
const Login = ({ setIsAuth }) => {
    let navigate = useNavigate()
    const signInGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem('isAuth', true);
            setIsAuth(true);
            navigate('/')
        })
    }
    return (
        <div className="login-page">
            <h1>Sign In With Google to Continue</h1>
            <button className="login-with-google-btn" onClick={signInGoogle}>Sign in with Google</button>
        </div>
    )
}

export default Login
