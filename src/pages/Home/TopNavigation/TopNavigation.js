import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const TopNavigation = () => {
    const { user, logOut } = useAuth()

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{ backgroundColor: '#4FA6F4', marginRight: 2 }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ display: 'inline' }} >
                        Car Fair
                    </Typography>
                    <Box sx={{ flexGrow: 2 }}>

                        <Nav.Link style={{ textDecoration: 'none', color: 'white', marginRight: 5 }} as={HashLink} to="/home#home">Home</Nav.Link>


                        <Link style={{ textDecoration: 'none', color: 'white', marginRight: 10 }} to='/collection'> Collections</Link>

                        <Nav.Link style={{ textDecoration: 'none', color: 'white', marginRight: 10 }} as={HashLink} to="/home#reviews">Reviews</Nav.Link>

                        <Nav.Link style={{ textDecoration: 'none', color: 'white', marginRight: 10 }} as={HashLink} to="/home#about">About</Nav.Link>

                        <Nav.Link style={{ textDecoration: 'none', color: 'white', marginRight: 5 }} href="/home#contact">Contact</Nav.Link>

                        {user?.email && < Link style={{ textDecoration: 'none', color: 'white' }} to='/dashboard'> Dashboard</Link>}


                    </Box>
                    <Box>
                        {!user?.email && <Link to='/login'><Button color="inherit" sx={{ color: 'white' }}>Login</Button></Link>}
                        {user?.email && <Typography sx={{ display: 'inline', right: 0 }}>{user.displayName}</Typography>}
                        {user?.email && <Button variant='contained' sx={{ color: 'white', backgroundColor: 'gray', m: 1 }} onClick={logOut}>Log out</Button>}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box >
    );
};

export default TopNavigation;