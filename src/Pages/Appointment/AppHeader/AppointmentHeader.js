import { Container, Grid } from '@mui/material';
import React from 'react';
import watch from '../../../images/watch.png';
import Calender from '../../Shared/Calender/Calender';

const AppointmentHeader = ({ date, setDate}) => {
    return (
        <Container sx={{ mt: 15, mb:2 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Calender date={date} setDate={setDate}></Calender>

                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '30%'}} src={watch} alt="" />

                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentHeader;