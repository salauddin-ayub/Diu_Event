import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';

const bookings =[
    {
        id:1,
        name:'Field Booking',
        time: '8.00 AM - 5.00 PM',
    },
    {
        id:2,
        name:'Other spot',
        time: '8.00 AM - 5.00 PM',
        space: 30,
    },
    {
        id:3,
        name:'Auditorium',
        time: '8.00 AM - 5.00 PM',
        space: 200,
    },
]

const AvailableAppointments = ({date}) => {
    return (
        <Container>
            <Typography variant="h5" sx={{ color: 'info.main', mb:2}}>Available Event Schedule on {date.toDateString()}</Typography>
            <Grid container spacing={2}>
                {
                    bookings.map(booking =><Booking
                        key={booking.id}
                        booking = {booking}
                        date = {date}
                    >
                    </Booking>)
                }             
           </Grid>
        </Container>
    );
};

export default AvailableAppointments;