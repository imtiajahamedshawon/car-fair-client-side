import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const Registation = () => {
    const [loginData, setLoginData] = useState({})
    const history = useHistory();

    const { createUser } = useAuth()

    const handleOnBlur = e => {
        const field = e.target.name
        const value = e.target.value
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData)
    }


    const handleCreateUser = e => {
        e.preventDefault()
        if (loginData.password !== loginData.password2) {
            return swal()
        } else {

        createUser(loginData.email, loginData.password,loginData.name, history,swal2)
        }
        console.log(loginData)
    }
    const swal = () => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Password didnot matched',
        })
    }
    const swal2 = () => {
        Swal.fire({
            icon: 'success',
            title: 'Log in successfully',
        })
    }
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#4FA6F4', minHeight: '560px' }}>
            <Box sx={{ width: '40%', backgroundColor: 'white', boxShadow: '1px 1px 10px 1px gray', borderRadius: '5px', paddingY: '100px' }}>
                <Typography variant='h4'>
                    Please Register
                </Typography>
                <form onSubmit={handleCreateUser}>
                    <TextField
                        id='standard-basic'
                        label='Name'
                        name="name"
                        sx={{ width: '75%' }}
                        onBlur={handleOnBlur}
                        variant="standard"
                    ></TextField>
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
                    <TextField
                        id='standard-basic'
                        label='Retype Password'
                        sx={{ width: '75%' }}
                        name="password2"
                        type='password'
                        onBlur={handleOnBlur}
                        variant="standard"
                    ></TextField>
                    <Button sx={{ width: '75%', mt: 2 }} type='submit' variant='contained' >Register</Button>
                </form>
                <Link to='/login'>Already Registered?sign in</Link>
            </Box>

        </Box>
    );
};

export default Registation;