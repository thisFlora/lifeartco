import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles.scss";

// import required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
SwiperCore.use([Autoplay]);

const Home = () => {
     return (
          <>
          <div className="home-container">
          <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                         delay: 2500,
                         disableOnInteraction: false,
                    }}
                    pagination={{
                         clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
               >
                    <SwiperSlide>
                         <img className="home-img" src="https://raw.githubusercontent.com/thisFlora/lifeartco/main/src/img-home/1.Br%C3%BAjula.jpg" alt="Brújula" />
                    </SwiperSlide>
                    <SwiperSlide>
                         <img className="home-img" src="https://raw.githubusercontent.com/thisFlora/lifeartco/main/src/img-home/2.Plan.jpg" alt="Plan" />
                    </SwiperSlide>
                    <SwiperSlide>
                         <img className="home-img" src="https://raw.githubusercontent.com/thisFlora/lifeartco/main/src/img-home/3.Estrategia.jpg" alt="Estrategia" />
                    </SwiperSlide>
                    <SwiperSlide>
                         <img className="home-img" src="https://raw.githubusercontent.com/thisFlora/lifeartco/main/src/img-home/4.Equipo.JPG" alt="Equipo" />
                    </SwiperSlide>
               </Swiper>
          </div>
          
          </>
     );

};

export default Home