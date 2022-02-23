import { Container, Grid, Typography, Alert } from '@mui/material';
import React, { useState } from 'react';
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