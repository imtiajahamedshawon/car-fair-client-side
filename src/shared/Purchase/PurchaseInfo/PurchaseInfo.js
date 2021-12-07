import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth'

const PurchaseInfo = ({ car }) => {
    const { user } = useAuth()
    const info = { carName: car?.name, carPrice: car?.Price, name: user?.displayName, email: user?.email }
    const [userInfo, setUserInfo] = useState(info)
    const history = useHistory()

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value
        const newData = { ...userInfo }
        newData[field] = value;
        setUserInfo(newData)
    }
    const successAlert = () => {
        Swal.fire(
            'Good job!',
            'Order placed successfully',
            'success'
        )
    }
    const handleOnSubmit = e => {
        const statusof = 'pending'
        const news = 'status'
        userInfo[news] =statusof;
            e.preventDefault()
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    successAlert()
                    history.push('/dashboard/myOrders')
                }
                console.log(data)
            })
        console.log(userInfo)
    }


    return (
        <Box>
            <form onSubmit={handleOnSubmit}>
                <TextField
                    label="Car Name"
                    disabled
                    defaultValue={car.name}
                    sx={{ width: '75%' }}
                    variant='standard'
                ></TextField>
                <TextField
                    label="customer name"
                    defaultValue={user?.displayName}
                    onBlur={handleOnBlur}
                    name='name'
                    sx={{ width: '75%' }}
                    variant='standard'
                ></TextField>
                <TextField
                    label="customer Email"
                    defaultValue={user?.email}
                    name='email'
                    onBlur={handleOnBlur}
                    sx={{ width: '75%' }}
                    variant='standard'
                ></TextField>
                <TextField
                    label="Price"
                    disabled
                    defaultValue={car?.Price}
                    sx={{ width: '75%' }}
                    variant='standard'
                ></TextField>
                <Button sx={{ width: '75%', mt: 1 }} type="submit" variant='contained'>Place Order</Button>
            </form>
        </Box>
    );
};

export default PurchaseInfo;