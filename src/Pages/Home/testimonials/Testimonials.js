import React from 'react';
import './Testimonials.css';
import frnd1 from '../../../images/arzu.jpg';
import frnd2 from '../../../images/joy.jpg';
import frnd3 from '../../../images/siplo.jpg';


import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data =[
    {
        avatar:frnd1,
        name: 'Anisur Rahman',
        review: 'Working with Ayub at college project is wonderful.He is responsive, flexible.He is great at thinking about the projects and making recomendations for improvements. '

    },
    {
        avatar:frnd2,
        name: 'Johirul Islam',
        review: 'Working with Ayub at college project is wonderful.He is responsive, flexible.He is great at thinking about the projects and making recomendations for improvements. '

    },
    {
        avatar:frnd3,
        name: 'Jahid Hasan',
        review: 'Absolutely love working with Ayub at Smart Dhopa - he is completely engaged in your project, pays close attention to your brief and always recommends the best solutions to achive your desired outcome.'
    },
]

const Testimonials = () => {
    return (
        <section id="testimonials">
        <h5>Review from others</h5>
        <h2 style={{color:'#00c689'}}>testimonials</h2>
        <Swiper className="container testimonials__container"
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
            {
                data.map(({avatar,name,review}, index) => {
                    return (
                   <SwiperSlide key={index} className="testimonial">
                       <div className="client__avatar">
                         <img src={avatar} alt="" />
                       </div>
                       <h5 classname="client__name">{name}</h5>
                       <small className='client__review'>
                       {review}
                      </small>
                   </SwiperSlide>
                    )
                })
            }
        </Swiper>
        </section>
    );
};

export default Testimonials;