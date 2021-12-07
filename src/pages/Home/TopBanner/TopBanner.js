import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
// import bg from '../../../images/blue-jeep-parking-public-zone.jpg'
import bg from '../../../images/images-1jpg.jpg'

const bannerBg = {
    backgroundImage: `url(${bg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundColor: 'rgba(45, 64, 81 ,0.6)',
    backgroundBlendMode: 'dark'
}


const TopBanner = () => {
    return (
        <Box style={bannerBg} sx={{ mt: 2 ,minHeight:"500px"}}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} sx={{mt:10}}>
                        <Box sx={{ textAlign: 'left' }}>
                            <Typography variant='h4' sx={{ fontWeight: 700 ,color:'tomato'}}>
                                World's Best Car Dealer
                            </Typography>
                            <Typography sx={{paddingY:5, color:'tomato'}}>
                                we provide world class auto electical cars.There is a huge collection of electical car . We got world Best Dealer Award in 2020.
                            </Typography>
                            <Button variant='contained' sx={{backgroundColor:'tomato'}}>Explore Now</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default TopBanner;