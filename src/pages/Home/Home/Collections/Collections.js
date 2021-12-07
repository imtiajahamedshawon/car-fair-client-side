import { CircularProgress, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import useData from '../../../../hooks/useData';
import Car from '../../../../shared/Car/Car';

const Collections = () => {
    const { cars, loading } = useData()
    if (loading) {
        return <CircularProgress />
    }
    return (
        <Container sx={{ mt: 2 }}>
            <Typography variant='h3' sx={{ m: 4,color:'tomato' }}>
                our collections
                <hr style={{ width: '35%', textAlign: 'center' }} />
            </Typography>
            <Grid container spacing={2}>
                {cars?.map(car => <Car
                    key={car._id}
                    car={car}
                ></Car>)}
            </Grid>
        </Container>
    );
};

export default Collections;