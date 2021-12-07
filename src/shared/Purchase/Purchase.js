import { Button, CardMedia, Container, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useData from '../../hooks/useData';
import PurchaseInfo from './PurchaseInfo/PurchaseInfo';

const Purchase = () => {
    const { id } = useParams()
    const { cars } = useData()
    const [car, setCar] = useState({})
    useEffect(() => {
        const currentCar = cars?.find(e => e._id === id)
        setCar(currentCar)
    }, [cars, id])
    return (
        <Container sx={{mt:6}}>
            {
                car && <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        
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
                                {car?.description}
                            </Typography>
                            <Typography variant='h6'>
                                Price:$ {car.Price}
                            </Typography>

                       

                    </Grid>
                    <Grid item xs={12} md={6}>
                       <PurchaseInfo
                       car={car}
                       ></PurchaseInfo>
                    </Grid>
                </Grid>
            }
        </Container>
    );
};

export default Purchase;