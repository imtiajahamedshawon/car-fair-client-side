import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import useData from '../../hooks/useData';
import Car from '../Car/Car';

const Cars = () => {
    const { cars } = useData()
    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant='h3' sx={{ marginBottom: 2, color: 'tomato' }}>
                Our Best Collection
                <hr style={{ padding: 1, width: '50%', textAlign: 'center' }} />
            </Typography>
            <Grid container spacing={4}>
                {cars?.slice(0, 6).map(car => <Car
                    key={car._id}
                    car={car}
                ></Car>)}
            </Grid>
        </Container>
    );
};

export default Cars;