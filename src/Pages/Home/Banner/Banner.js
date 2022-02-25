import React from 'react';
import { Link } from 'react-router-dom';
import practice from '../../../images/diuBanner.jpg';
import './Banner.css';


const Banner = () => {
	
	return (
		<section className="banner-section">
			<div className="container">
				<div className="row align-items-center" style={{ height: '100vh' }}>
					<div className="col-md-4">
						<h1>
						Make Everything Easier <br />
               Starts From Here
						</h1>
						<p className="my-4">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum voluptates nobis numquam velit? Perferendis impedit perspiciatis ea aut corrupti vitae?
						</p>
						<Link className="btn btn-primary button-style" to="/event-booking">
							Book Event
						</Link>
					</div>
					<div className="col-md-6 d-none d-md-block offset-1">
						<img className="img" src={practice} alt="banner-img" width="120%"/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Banner;

// import React from 'react';
// import Grid from '@mui/material/Grid';
// import practice from '../../../images/practice.png';
// import bg_final from '../../../images/bg_final.jpg';
// import { Button, Typography, Container } from '@mui/material';
// import { Box } from '@mui/system';

// const bannerBg ={
//     background: `url(${bg_final})`,
//     height: 450,
//     marginTop: 20
// }

// const verticleCenter ={
//     display: 'flex',
//     alignItems: 'center',
//     height: 400, 
// }

// const Banner = () => {
//     return (
//      <Container style={bannerBg} sx={{ flexGrow: 1}}>
//         <Grid container spacing={2}>
//           <Grid item style={{ ...verticleCenter, textAlign: 'left'}} xs={12} md={6}>
//              <Box>
//                 <Typography variant="h3">
//                 Make Everything Easier <br />
//                 Starts From Here
//                 </Typography>
//                 <Typography variant="h6" sx={{ my:3 ,fontSize: 13, fontWeight: 300, color: 'gray'}}>
//                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum voluptates nobis numquam velit? Perferendis impedit perspiciatis ea aut corrupti vitae?
//                </Typography>
//                <Button variant="contained" style={{backgroundColor: '#5CE7ED'}}>Book Now</Button>
//              </Box>   
//           </Grid>
//           <Grid item xs={12} md={6} style={verticleCenter}>
//               <img style={{ width: '450px' }} src={practice} alt="" />   
//           </Grid>
//         </Grid>
//       </Container>
//     );
// };

// export default Banner;