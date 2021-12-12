import { Alert, Button, CardContent, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth()

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })
        e.preventDefault()
    }
    return (
        <div>
            <h1 style = {{color: '#77F5EA'}}>Make an admin</h1>
            <CardContent style={{ maxWidth: 450, margin: "0 auto", padding: "20px 5px" }}>
                <form onSubmit={handleAdminSubmit}>
                    <Grid container spacing={1}>

                        <Grid xs={12} item>
                            <TextField type="email" label="Email"
                                onBlur={handleOnBlur} placeholder="Enter email" variant="outlined" fullWidth required />
                        </Grid>
                        <Grid xs={12} item>
                            <Button type="submit" variant="contained" color="primary" fullWidth>MakeAdmin</Button>
                        </Grid>
                    </Grid>
                </form>
                {success && <Alert severity="success">Made Admin successfully!</Alert>}
            </CardContent>

        </div>
    );
};

export default MakeAdmin;