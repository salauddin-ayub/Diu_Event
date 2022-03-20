import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../../App.css";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/logo.png";

const Navigation = () => {
  const [isSticky, setSticky] = useState(false);
  const [isCollapsed, setCollapsed] = useState(null);
  const [navStyle, setNavStyle] = useState();
  const { user, logout } = useAuth();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setSticky(true);
        setNavStyle("");
      } else {
        setSticky(false);
        setNavStyle("text-gray");
      }
    });
  }, []);
  return (
    <nav
      className={
        isSticky || isCollapsed
          ? "slide in show shadow-sm navbar navbar-expand-sm bg-white navbar-light py-3  fixed-top"
          : "slide out show navbar navbar-expand-sm navbar-light py-4 fixed-top "
      }
    >
      <div className="container">
        <Link className="navbar-brand" to="/" style={{ color: "#15D1C8" }}>
          <img src={logo} alt="logo" />
          <span className="logo-name"> Campus Event </span>
        </Link>
        <button
          onClick={() => setCollapsed(!isCollapsed ? "show" : null)}
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className={`collapse navbar-collapse ${isCollapsed}`}
          id="collapsibleNavId"
        >
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/event-booking">
                Event Booking
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/reviews">
                Reviews
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
            {
              user?.email ?
              <li> <Button onClick={logout} color="inherit">Logout</Button></li>
              :
              <Link style={{ textDecoration: 'none', color: 'black' }} to="/login">
                    <Button color="inherit">Login</Button>                   
                    </Link>

            }
           
            {/* {
              user?.email ?
                  <Box>
                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
                    <Button color="inherit">Dashboard</Button>
                    </NavLink>
                   <Button onClick={logout} color="inherit">Logout</Button>
                  </Box>
                       :
                  <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
                    <Button color="inherit">Login</Button>
                    </NavLink>
              } */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import { Link, NavLink } from 'react-router-dom';
// import useAuth from '../../../hooks/useAuth';

// const Navigation = () => {
//   const { user, logout } = useAuth();
//     return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:"white" }}>
//             Campus Event
//           </Typography>

//           <Link to="/event-booking">
//           <Button color="inherit" sx={{ color: 'white'}}>Event-Booking</Button>
//           </Link>
//           {
//               user?.email ?
//                   <Box>
//                     <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/dashboard">
//                     <Button color="inherit">Dashboard</Button>
//                     </NavLink>
//                    <Button onClick={logout} color="inherit">Logout</Button>
//                   </Box>
//                        :
//                   <NavLink style={{ textDecoration: 'none', color: 'white' }} to="/login">
//                     <Button color="inherit">Login</Button>
//                     </NavLink>
//               }
//         </Toolbar>
//       </AppBar>
//     </Box>
//     );
// };

// export default Navigation;
