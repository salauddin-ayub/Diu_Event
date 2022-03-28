import { Container, Grid, Typography, Alert } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings =[
    {
        id:1,
        img:"https://media.istockphoto.com/vectors/gold-trophy-with-the-name-plate-of-the-winner-of-the-competition-vector-id1168757141?k=20&m=1168757141&s=612x612&w=0&h=_jia0PPMGux63K2gqp-o0OzRcHbd6bvjVQJ70rz3nF8=",
        name:'Field Booking',
        time: '8.00 AM - 5.00 PM',
    },
    {
        id:2,
        img:"https://media.istockphoto.com/vectors/gold-trophy-with-the-name-plate-of-the-winner-of-the-competition-vector-id1168757141?k=20&m=1168757141&s=612x612&w=0&h=_jia0PPMGux63K2gqp-o0OzRcHbd6bvjVQJ70rz3nF8=",
        name:'Other spot',
        time: '8.00 AM - 5.00 PM',
        space: 30,
    },
    {
        id:3,
        img:"https://media.istockphoto.com/vectors/gold-trophy-with-the-name-plate-of-the-winner-of-the-competition-vector-id1168757141?k=20&m=1168757141&s=612x612&w=0&h=_jia0PPMGux63K2gqp-o0OzRcHbd6bvjVQJ70rz3nF8=",
        name:'Auditorium',
        time: '8.00 AM - 5.00 PM',
        space: 200,
    },
]

const AvailableAppointments = ({date}) => {
    const [bookingSuccess, setbookingSuccess] = useState(false);
    return (
        <Container>
            <Typography variant="h5" sx={{ color: 'info.main', mb:2}}>Available Event Schedule on {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">Succesfully Booking!</Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking =><Booking
                        key={booking.id}
                        booking = {booking}
                        date = {date}
                        setbookingSuccess={setbookingSuccess}
                    >
                    </Booking>)
                }             
           </Grid>
        </Container>
    );
};

export default AvailableAppointments;