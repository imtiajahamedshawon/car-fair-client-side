import { Button, Container, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import useAuth from '../../../hooks/useAuth';
import { useHistory } from 'react-router';

const labels = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
};

const Review = () => {
    const [value, setValue] = React.useState(2);
    const [hover, setHover] = React.useState(-1);

    const { user } = useAuth()
    const history = useHistory()

    const [rate, setRate] = useState()
    const handleOnBlur = e => {
        setRate(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()
        const ratingData = { rate, value, name: user?.displayName, email: user?.email }
        fetch('http://localhost:5000/review', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ratingData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Thank you for your feedback')
                    history.push('/dashboard')
                }
            })
    }
    return (
        <Container>
            <Typography variant='h4'>
                Rate us
            </Typography>
            <Box
                sx={{
                    width: 200,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 13,
                    marginBottom: 2
                }}
            >
                <Rating
                    name="hover-feedback"
                    value={value}
                    precision={0.5}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                        setHover(newHover);
                    }}
                    emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                {value !== null && (
                    <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                )}
            </Box>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="filled-multiline-static"
                    label="Say something"
                    multiline
                    onBlur={handleOnBlur}
                    sx={{ width: '75%' }}
                    rows={4}
                    variant="filled"
                ></TextField>
                <Button sx={{ width: '50%', mt: 1 }} variant='contained' type="submit">Rate us</Button>
            </form>
        </Container>
    );
};

export default Review;