import { Button, TableBody, TableCell } from '@mui/material';
import React from 'react';
import Swal from 'sweetalert2';

const MyOrder = ({ order }) => {

    const confirmation = () => {
        Swal.fire(
            'Good job!',
            'Your Order Deleted Successfully!',
            'success'
        )
    }
    const handleCancelOrder = id => {
        const process = window.confirm('Are you sure to delete?')
        if (process) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        confirmation()
                    }
                })
        }
    }
    return (
        <TableBody>
            <TableCell >
                {order._id}
            </TableCell>
            <TableCell align="right">{order.carName}</TableCell>
            <TableCell align="right">${order.carPrice}</TableCell>
            <TableCell align="right">{order?.status}</TableCell>
            <TableCell align="right"><Button variant="contained" onClick={() => handleCancelOrder(order._id)}>Cancel</Button></TableCell>
        </TableBody>
    );
};

export default MyOrder;