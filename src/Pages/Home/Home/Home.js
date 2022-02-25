import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Booking from '../Booking/Booking';
import Services from '../Services/Services';
import Infos from '../../Infos/Infos';
import Features from '../Features/Features';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Infos></Infos>
            <Services></Services>
            <Booking></Booking>
            <Features></Features>
            <Contact></Contact>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;