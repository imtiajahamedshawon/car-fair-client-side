import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import { Link } from 'react-router-dom';


const Car = ({ car }) => {
    return (
        <Grid item xs={12} md={4}>
            <Paper sx={{ boxShadow: '3px 3px 10px 3px gray',pb:1 }}>
                <CardMedia
                    component="img"
                    height="140"
                    borderRadius="10px"
                    image={car.img}
                    alt="green iguana"
                />
                <Typography variant='h4'>
                    {car.name}
                </Typography>
                <Typography sx={{ textAlign: 'justify', p: 1 }}>
                    {car.description.slice(0, 55)}
                </Typography>
                <Typography variant='h6'>
                    Price:$ {car.Price}
                </Typography>
                <Link to={`/orders/${car._id}`}><Button style={{ backgroundColor: '#5CE7ED' }}variant='contained'>purchase now</Button></Link>
            </Paper>

        </Grid>
    );
};

export default Car;