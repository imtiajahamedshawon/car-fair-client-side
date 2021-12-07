import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import '../../Header/Header.css'
import { Box } from '@mui/system';
import { Button, TextField, Typography } from '@mui/material';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import google from '../../images/google.png'

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const history = useHistory()
    const location = useLocation()
    const { login } = useAuth()
    const { signInWithGoogle } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }

    const swal2 = () => {
        Swal.fire({
            icon: 'success',
            title: 'Log in successfully',
        })
    }
    const handleSignIn = e => {

        login(loginData.email, loginData.password, location, history, swal2)
        e.preventDefault()
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }


    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#4FA6F4', minHeight: '560px' }}>
            <Box sx={{ width: '40%', backgroundColor: 'white', boxShadow: '1px 1px 10px 1px gray', borderRadius: '5px', paddingY: '100px' }}>
                <Typography variant='h4'>
                    Please Login
                </Typography>
                <form onSubmit={handleSignIn}>
                    <TextField
                        id='standard-basic'
                        label='E-mail'
                        name="email"
                        sx={{ width: '75%' }}
                        onBlur={handleOnBlur}
                        variant="standard"
                    ></TextField>
                    <TextField
                        id='standard-basic'
                        label='Password'
                        sx={{ width: '75%' }}
                        name="password"
                        type='password'
                        onBlur={handleOnBlur}
                        variant="standard"
                    ></TextField>
                    <Button sx={{ width: '75%', mt: 1 }} type='submit' variant="contained">Login</Button>
                </form>
                <Link style={{ textDecoration: 'none', mt: 2 }} to="/register" variant='contained'>New to Car Fair?Register Now</Link>
                <br></br>
                <br></br>
                <button
                    onClick={handleGoogleSignIn} className="btn ">
                    <img width="46px" src={google} alt="google-icon" />
                </button>
            </Box>

        </Box>
    );
};

export default Login;