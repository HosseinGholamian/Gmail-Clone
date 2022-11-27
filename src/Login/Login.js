import React from 'react'
import "./login.css"
import Button from '@mui/material/Button';
import { auth, provider } from '../firebase';
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
function Login() {
    const dispatch = useDispatch();
    const signIn = () => {
        signInWithPopup(auth, provider)
            .then(({ user }) => dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL
            }))).catch(error => alert(error.message))

    }
    return (
        <div className='login'>
            <div className="login__container">
                <img src="https://th.bing.com/th/id/R.7028224df44381261916e6c5411e1249?rik=uv7kbG5WxTM%2bhQ&pid=ImgRaw&r=0" alt="" />
                <Button color="primary" variant="contained" size="large" onClick={signIn}>
                    Login
                </Button>
            </div>
        </div>
    )
}

export default Login