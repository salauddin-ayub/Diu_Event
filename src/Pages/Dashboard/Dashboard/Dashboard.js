import * as React from 'react';
           
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import DashBoardHome from '../DashboardHome/DashBoardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddService from '../AddService/AddService';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';


import {
	faCalendar,
	faGripHorizontal,
	faSignOutAlt,
	faUser,
	faUserPlus,
	
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Dashboard.css';
import logo from "../../../images/logo2.png";
import userPhoto from '../../../images/Group 2.png';


const drawerWidth = 240;

function Dashboard(props) {
  const { user, logout } = useAuth();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  
  let { path, url } = useRouteMatch();
  const {admin} = useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4"
    style={{ minHeight: '100vh' }}>
      {/* <Toolbar />
      <Divider /> */}
      <ul className="list-unstyled">
				<li>
					<Link to="/" style={{ color: '#15D1C8' }}>
						<img src={logo} alt="logo" width="25px" />
						<span className="text-white navName"> Campus Event </span>
					</Link>
				</li>
				<li>
						{/* <FontAwesomeIcon icon={faUser} className="text-white" /> */}
            <img className='ml-3' src={user.photoURL ? user.photoURL : userPhoto} width="35px"  alt="" /> 
						<span className="text-white navName ml-1">{user.displayName}</span>
				</li>
        <li>
							<Link to={`${url}`} className="text-white">
								<FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
							</Link>
						</li>
				
            {admin && 
					<>
						<li>
							<Link to={`${url}/makeAdmin`} className="text-white">
								<FontAwesomeIcon icon={faCalendar} /> <span>Make Admin</span>
							</Link>
						</li>
						<li>
							<Link to={`${url}/addService`} className="text-white">
								<FontAwesomeIcon icon={faUserPlus} /> <span>Add service</span>
							</Link>
						</li>
					</>
	     	}
				
			</ul>
			<div>
				<Link to="/" className="text-white">
					<FontAwesomeIcon icon={faSignOutAlt} /> <span onClick={() => logout({})}>Logout</span>
				</Link>
			</div>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{backgroundColor: '#0fcfec'}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
        <Route exact path={path}>
          <DashBoardHome></DashBoardHome>
        </Route>
        <AdminRoute path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute path={`${path}/addService`}>
          <AddService></AddService>
        </AdminRoute>
      </Switch>      
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {

  window: PropTypes.func,
};

export default Dashboard;


// import * as React from 'react';
// import PropTypes from 'prop-types';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import IconButton from '@mui/material/IconButton';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import MailIcon from '@mui/icons-material/Mail';
// import MenuIcon from '@mui/icons-material/Menu';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import { Button } from '@mui/material';
// import {
//   Switch,
//   Route,
//   Link,
//   useRouteMatch
// } from "react-router-dom";
// import DashBoardHome from '../DashboardHome/DashBoardHome';
// import MakeAdmin from '../MakeAdmin/MakeAdmin';
// import AddService from '../AddService/AddService';
// import useAuth from '../../../hooks/useAuth';
// import AdminRoute from '../../Login/AdminRoute/AdminRoute';

// import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
// import {
// 	faCalendar,
// 	faGripHorizontal,
// 	faQuoteLeft, faSignOutAlt,
// 	faUser,
// 	faUserPlus,
// 	faUsers
// } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// const drawerWidth = 240;

// function Dashboard(props) {
//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);
  
//   let { path, url } = useRouteMatch();
//   const {admin} = useAuth();
//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <div>
//       <Toolbar />
//       <Divider />
//           <Link to="/event-booking">
//           {/* <Button color="inherit" sx={{ color: 'black'}}>Event-Booking</Button> */}
//           <FontAwesomeIcon  icon={faCalendar} /> <span style={{color: 'black', textdecoration: 'none'}}>Event-Booking</span>
//           </Link>
//           <br />
//           <Link to={`${url}`}>
//           {/* <Button color="inherit" sx={{ color: 'liteorange'}}>Dashboard</Button> */}
//           <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span>
//           </Link>
//           <br />
//           {admin && <Box>
//             <Link to={`${url}/makeAdmin`}>
//           {/* <Button color="inherit" sx={{ color: 'liteorange'}}>Make Admin</Button> */}
//           <FontAwesomeIcon icon={faUsers} /> <span>Make Admin</span>
//           </Link>
//           <br />
//           <Link to={`${url}/addService`}>
//           {/* <Button color="inherit" sx={{ color: 'liteorange'}}>Add Service</Button> */}
//           <FontAwesomeIcon icon={faUserPlus} /> <span>Add Service</span>
//           </Link>
//           </Box>}
       
//       {/* <List>
//         {['Event-Booking', 'Dashboard', 'Make Admin', 'Add Service'].map((text, index) => (
//           <ListItem button key={text}>
//             <ListItemIcon>
//               {index % 2 === 0 ? <FontAwesomeIcon icon={faGripHorizontal} /> : <MailIcon />}
//             </ListItemIcon>
//             <ListItemText primary={text} />
//           </ListItem>
//         ))}
//       </List> */}
//     </div>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         sx={{
//           width: { sm: `calc(100% - ${drawerWidth}px)` },
//           ml: { sm: `${drawerWidth}px` },
//         }}
//       >
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div">
//             Dashboard
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Box
//         component="nav"
//         sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
//         aria-label="mailbox folders"
//       >
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//         <Drawer
//           variant="permanent"
//           sx={{
//             display: { xs: 'none', sm: 'block' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//           open
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//       <Box
//         component="main"
//         sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
//       >
//         <Toolbar />
//         <Switch>
//         <Route exact path={path}>
//           <DashBoardHome></DashBoardHome>
//         </Route>
//         <AdminRoute path={`${path}/makeAdmin`}>
//           <MakeAdmin></MakeAdmin>
//         </AdminRoute>
//         <AdminRoute path={`${path}/addService`}>
//           <AddService></AddService>
//         </AdminRoute>
//       </Switch>
        
//       </Box>
//     </Box>
//   );
// }

// Dashboard.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// export default Dashboard;
