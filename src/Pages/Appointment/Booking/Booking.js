import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookModal from '../BookModal/BookModal';


const Booking = ({ booking, date }) => {
    const {name, time, space} = booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (
       <>
        <Grid item xs={12} am={6} md={4}>
             <Paper elevation={3} sx={{ py: 5 }}>
                 <Typography sx={{ color: 'info.main', fontWeight: 600}} variant="h5" gutterBottom component="div">
                     {name}
                 </Typography>  
                 <Typography variant="h5" gutterBottom component="div">
                     {time}
                 </Typography>  
                 <Typography variant="caption" display="block" gutterBottom>
                     {space} SPACES AVAILABLE
                 </Typography>  
                 <Button onClick={handleBookingOpen} variant="contained">Book Spot</Button>          
             </Paper>        
        </Grid>
        <BookModal
        date={date}
        booking={booking}
        openBooking={openBooking}
        handleBookingClose={handleBookingClose}
        ></BookModal>
       </>
    );
};

export default Booking;