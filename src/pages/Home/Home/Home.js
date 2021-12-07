import { Box } from '@mui/system';
import React from 'react';
import Cars from '../../../shared/Cars/Cars';
import Contact from '../../Contact/Contact';
import Footer from '../../Footer/Footer';
import ToSellBanner from '../../ToSellBanner/ToSellBanner';
// import HomeText from '../../HomeText/HomeText';
import Reviews from '../Reviews/Reviews';
import TopBanner from '../TopBanner/TopBanner';
import TopNavigation from '../TopNavigation/TopNavigation';

const Home = () => {
    return (
        <div id = "home">
            <Box >
                <TopNavigation></TopNavigation>
                <TopBanner></TopBanner>
                <Cars></Cars>
                <ToSellBanner></ToSellBanner>
                <Reviews></Reviews>
                <Contact></Contact>
                <Footer></Footer>
            </Box>
        </div>
    );
};


export default Home;