import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentHeader from '../AppHeader/AppointmentHeader';
import AvailableAppointments from '../AvailApp/AvailableAppointments';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    console.log(date);
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvailableAppointments date={date}></AvailableAppointments>
        </div>
    );
};

export default Appointment;