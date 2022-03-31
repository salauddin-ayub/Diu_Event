import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
// import DateRangePicker from '@mui/lab/DateRangePicker';
// import { DateRangePickerComponent } from '@syncfusion/ej2-react-calendars';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BookModal = ({openBooking, handleBookingClose, booking, date, setbookingSuccess}) => {
    const { name, time } = booking;
    const {user} = useAuth();
    const initialInfo = {userName: user.displayName, email:user.email, phone: ''}
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = e => {
      const field = e.target.name;
      const value = e.target.value;
      const newInfo = {...bookingInfo};
      newInfo[field] = value;
      setBookingInfo(newInfo);

    }

    const handleBookSubmit = e => {
      
      const appointment ={
        ...bookingInfo,
        time, 
        serviceName: name,
        date: date.toLocaleDateString()
      }

      //send to Server
      fetch('http://localhost:5000/appointments', {
        method: 'POST',
        headers: { 
          'content-type': 'application/json'
        },
        body: JSON.stringify(appointment)
      })
      .then(res =>res.json())
      .then(data => {
        if (data.insertedId) {
          setbookingSuccess(true);
          handleBookingClose();
        }
      });
      e.preventDefault();
    }
    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openBooking}
        onClose={handleBookingClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openBooking}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              {name}
            </Typography>
            <form onSubmit={handleBookSubmit}>
               <TextField
                 disabled
                 sx={{ width: '95%', m:1}}
                 id="standard-size-small"
                 defaultValue={time}
                 size="small"
               />
               <TextField                
                 sx={{ width: '95%', m:1}}
                 id="standard-size-small"
                 name="userName"
                 defaultValue={user.displayName}
                 onBlur = {handleOnBlur}
                 size="small"
               />
               <TextField
                 sx={{ width: '95%', m:1}}
                 id="standard-size-small"
                 defaultValue="Phone Number"
                 name="phone"
                 onBlur = {handleOnBlur}
                 size="small"
               />
               <TextField
                 sx={{ width: '95%', m:1}}
                 id="standard-size-small"
                 name="email"
                 onBlur = {handleOnBlur}
                 defaultValue={user.email}
                 size="small"
               />
                <TextField
                 disabled
                 sx={{ width: '95%', m:1}}
                 id="standard-size-small"
                 defaultValue={date.toDateString()}
                 size="small"
               />
             
               <Button type="submit" variant="contained">Submit</Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    );
};

export default BookModal;