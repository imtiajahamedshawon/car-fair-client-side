import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';
import Cars from '../../../shared/Cars/Cars';
import MakeAdmin from '../MyOrder/MakeAdmin/MakeAdmin';
import AdminRoute from '../../../Login/AdminRoute/AdminRoute';
import Home from '../../Home/Home/Home';


const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { admin, logOut } = useAuth()

    let { path, url } = useRouteMatch();
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{ backgroundColor: '#1E8EE9 ', minHeight: '100%' }}>
            <Toolbar  >
                <Typography variant='h3' sx={{ color: 'yellow' }}>
                    Car Fair
                </Typography>
            </Toolbar>
            <Divider />
            <List>


                <Link style={{ textDecoration: 'none' }} to={`${url}/home`}><Button variant='contained' sx={{ width: '95%', m: 1 }}>Home</Button></Link>

                <Link style={{ textDecoration: 'none' }} to={`${url}/myOrders`}><Button variant='contained' sx={{ width: '95%', m: 1 }}>My Orders</Button></Link>


                <Link style={{ textDecoration: 'none' }} to={`${url}/cars`}><Button variant='contained' sx={{ width: '95%', m: 1 }}>Cars</Button></Link>


                {admin && <Box>
                    <Link style={{ textDecoration: 'none' }} to={`${url}/makeAdmin`}><Button variant='contained' sx={{ width: '95%', m: 1 }}>MakeAdmin</Button></Link>
                </Box>}

                <Link style={{ textDecoration: 'none' }} to={`${url}/payment`}><Button variant='contained' sx={{ width: '95%', m: 1 }}>Payment</Button></Link>


                <Link style={{ textDecoration: 'none' }} to={`${url}/review`}><Button variant='contained' sx={{ width: '95%', m: 1 }}>Review</Button></Link>

                <Button onClick={logOut} variant='contained' sx={{ width: '95%', m: 1 }}>Log out</Button>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography style={{ color: '#77F5EA' }} variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/cars`}>
                        <Cars></Cars>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <Route path={`${path}/home`}>
                        <Home></Home>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
