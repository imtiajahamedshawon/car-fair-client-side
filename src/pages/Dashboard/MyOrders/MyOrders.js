import { Container } from '@mui/material';
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import MyOrder from '../MyOrder/MyOrder';
import Paper from '@mui/material/Paper';
import useMyOrders from '../MyOrder/useMyOrders';


const MyOrders = () => {
    const myOrders = useMyOrders()
    return (
        <Container>
            <h1>My Orders</h1>
            {myOrders && <TableContainer >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Order Id</TableCell>
                            <TableCell align="right">Car Name</TableCell>
                            <TableCell align="right">Car Price</TableCell>
                            <TableCell align="right">status</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>


                    {myOrders?.map(order => <MyOrder
                        key={order._id}
                        order={order}
                    ></MyOrder>)}

                </Table>
            </TableContainer>}
        </Container>
    );
};

export default MyOrders;