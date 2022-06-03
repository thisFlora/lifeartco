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
                         <img className="home-img" src="http://oneteamconcepts.org/wp-content/uploads/2022/02/shutterstock_1731284125_0.jpg" alt="Snow" />
                    </SwiperSlide>
                    <SwiperSlide>
                         <img className="home-img" src="https://www.aturnos.com/blog/wp-content/uploads/2018/02/action-2277292_1920.jpg" alt="Forest" />
                    </SwiperSlide>
                    <SwiperSlide>
                         <img className="home-img" src="https://assets.entrepreneur.com/content/3x2/2000/20170731092357-business-businessteam-working-training.jpeg" alt="Mountains" />
                    </SwiperSlide>
               </Swiper>
          </div>
          
          </>
     );

};

export default Home