import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Status.css';


const Status = () => {
    const [appointment, setAppointment] = useState({});
    const [message, setMessage] = useState("");
    const { appointmentId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/appointment/${appointmentId}`)
          .then((res) => res.json())
          .then((data) => setAppointment(data));
      }, []);

      const handleStatusChange = (e) => {
        const updatedStatus = e.target.value;
        const updateAppointment = { ...appointment };
        updateAppointment.status = updatedStatus;
        setAppointment(updateAppointment);
      };
      const handleUpdateOrderStatus = (e) => {
        e.preventDefault();
        const url = `http://localhost:5000/appointment/${appointmentId}`;
        fetch(url, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(appointment),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              setMessage("Status Updated Successfully!");
              setAppointment({});
            }
          });
      };

    return (
        <div className="header pt-12">
        <h2 className="text-2xl text-gray-700 font-bold py-4">
          Update Appointment Status
        </h2>
        <span className="py-2 text-green-500">{message}</span>
        <div className="box pb-24">
          <h2 style={{ color: "#19d3ae"}} className="text-xl text-yellow-700">
            Service Name: ({appointment.serviceName || ""})
          </h2>
          <h2 style={{ color: "#19d3ae"}} className="tex-xl text-yellow-500 p-2">
            Appointment-date: {appointment.date || ""}
          </h2>
          <form
            className="xl:shadow-lg lg:shadow-lg p-4 xl:mx-96 lg:mx-96 rounded-lg"
            onSubmit={handleUpdateOrderStatus}
          >
            <label style={{ color: "#19d3ae"}} htmlFor="status">Update Action Status</label>
            <br />
  
            <select
              className="p-2 border-2 xl:p-2 lg:p-2 rounded my-2"
              onChange={handleStatusChange}
            >
              <option value="processing">Processing</option>
              <option value="reject">Reject</option>
              <option value="approved">Approved</option>
            </select>
            <br />
            <input
              className="bg-black  p-2 my-2 text-black rounded shadow"
              type="submit"
              value="Update"
            />
          </form>
  
          <Link sx={{textColor: 'black'}} to="/dashboard">Dashboard</Link>
        </div>
      </div>
    );
  };

export default Status;