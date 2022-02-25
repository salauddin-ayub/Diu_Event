import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import foot_team from '../../../images/foot_team.png'
import bg_final from '../../../images/bg_final.jpg';
import { Button, Typography } from '@mui/material';

const bookBg = {
    background: `url(${bg_final})`,
    backgroundColor: 'rgba(45, 58, 74,)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 150
}

const Booking = () => {
    return (
     <Box style={bookBg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
              <img
                 style={{ width: 400, marginTop: '-100px'}}
                 src={foot_team} alt="" />            
          </Grid>
          <Grid item xs={12} md={6} sx={{
            display: 'flex', 
            justifyContent: 'flex-start',
            alignItems: 'center',
            textAlign: 'left',
            }}>
              <Box>
              <Typography variant="h6" sx={{ mb: 1 }} style={{color: '#00c689'}}>
                 Booking
              </Typography> 
              <Typography variant="h4" style={{color: 'black'}}>
                 Make your book today
              </Typography>   
              <Typography variant="h6" sx={{ my: 1 }} style={{ color: 'black', fontsize: 14, fontWeight: 300}}>
                 you can apply for any of our spot to visit or enjoy.
              </Typography> 
              <Button variant="contained" style={{backgroundColor: '#00c689'}}>Learn more</Button> 
              </Box>       
          </Grid>
        </Grid>
      </Box>
    );
};

export default Booking;