import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ToSell from '../../images/to sell.jpg'
import { Button, Typography } from '@mui/material';



const ToSellBanner = () => {
    return (
        <div id = "about">
        <Box>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <br></br>
                    <br></br>
                    <br></br>
                    <img
                        style={{ width: 500,boxShadow: '3px 3px 10px 3px gray',pb:1 }}
                        src={ToSell} alt="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlign: 'left'
                }}>
                    <br></br>
                    <br></br>
                    <Box>
                        <Typography variant="h3" sx={{ mb:5 }} style={{ color: '#5CE7ED',textAlign:'center' }}>
                         
                            All Cars Demo Today
                        </Typography>
                        <Typography variant="h5" style={{ color: 'black' }}>
                        All Cars
                        </Typography>
                        <Typography variant="h6" sx={{ my: 5 }} style={{ color: 'black', fontSize: 15, fontWeight: 300, }}>
                            With an unprecedented pandemic blanketing the globe and affecting every aspect of consumer activity, it’s not surprising that new vehicle sales in the U.S. through the first half of the year dropped almost 25% compared with 2019.

                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
        </div>
    );
};

export default ToSellBanner;