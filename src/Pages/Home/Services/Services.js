import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import sport from '../../../images/sport.png';
import party from '../../../images/party.png';
import audit from '../../../images/audit.png';
import Typography from '@mui/material/Typography';

const services = [
    {
        name: 'Sports Field', 
        description:'We provide a big field include different types of sports facility.Students often do participate in various types of game like Cricket, Football and others.',
        img: sport
    },
    {
        name: 'Campus', 
        description:'We have some amazing place to spent quality time.All places are well decorated and nice designed.',
        img: party
    },
    {
        name: 'Auditorium', 
        description:'We provide a big auditorium.To arrenge a program ,this place is best choice for anyone.',
        img: audit
    }
]

const Services = () => {
    return (
    <Box sx={{ flexGrow: 1 }}>
        <Container>
            <Typography sx={{fontWeight:500, m: 2,  color: '#00c689'}} variant="h5" component="div">
                Our Services
            </Typography>
            <Typography sx={{ fontWeight: 600, m:2 }} variant="h4" component="div">
                 Services We Provide
            </Typography>
           <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
             {
                 services.map(service => <Service
                     key={service.name}
                     service ={service}
                 ></Service>)
             }
        </Grid>
        </Container>
    </Box>
    );
};

export default Services;