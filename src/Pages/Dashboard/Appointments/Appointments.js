import React, { useState,useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Appointments = ({date}) => {
    const {user} = useAuth();
    const [appointments, setAppointments] = useState([])

    useEffect( ()=>{
        const url = `http://localhost:5000/appointments?email=${user.email}&date=${date}`
        fetch(url)
        .then(res=> res.json())
        .then(data => setAppointments(data));
    },[date, user.email])
    console.log(date);
    return (
        <div>
            <h2>Total Bookings: {appointments.length}</h2>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="Appointment table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Time</TableCell>
            <TableCell align="right">Service</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.userName}
              </TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.serviceName}</TableCell>
              <TableCell align="right"><NavLink to={`/appointmentEdit/${row._id}`}>
                <button className="pl-4">
                  Edit
                </button>
              </NavLink></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    
    
        </div>
    );
};

export default Appointments;