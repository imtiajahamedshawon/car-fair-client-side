import { Avatar, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import user from '../../../../images/149071.png'
import Rating from '@mui/material/Rating';



const Review = ({ review }) => {
    return (
        
        <Grid item xs={12} md={3}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Avatar alt="Remy Sharp" src={user} />

                <Typography>
                    {review.name}
                </Typography>
                <Rating name="read-only" value={review.value}
                    readOnly />
                <Typography>
                    {review.rate}
                </Typography>
            </Box>

        </Grid>
    );
};

export default Review;