import { React, useState, useEffect } from "react";
import CarouselItem from "./CarouselItem.js";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';

SwiperCore.use([Autoplay]);
     function getWindowDimensions() {
          const { innerWidth: width, innerHeight: height } = window;
          return {
          width,
          height
          };
     }
     
     export function useWindowDimensions() {
          const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
          useEffect(() => {
          function handleResize() {
          setWindowDimensions(getWindowDimensions());
          }
          window.addEventListener('resize', handleResize);
          return () => window.removeEventListener('resize', handleResize);
          }, []);
     
          return windowDimensions;
     }


const CarouselDetail = ({ team }) => {
     const { width } = useWindowDimensions();
     let mobile = false;

     const SwiperProps = {
          slidesPerView: 3,
          spaceBetween: 40,
          centeredSlides: true,
          loop: true,
          autoplay: {
               delay: 2500,
               disableOnInteraction: false,
          },
          pagination: {
               clickable: true,
          },
          navigation: true,
     };

     const SwiperPropsMobile = {
          slidesPerView: 1,
          spaceBetween: 40,
          centeredSlides: true,
          loop: true,
          autoplay: {
               delay: 2500,
               disableOnInteraction: false,
          },
          pagination: {
               clickable: true,
          },
          navigation: true,
     };

     if (width < 768) {
          mobile = true;
     }else{
          mobile = false;
     }
     return (
          <>
               {mobile && (
                    <Swiper
                         {...SwiperPropsMobile}
                         modules={[Autoplay, Pagination, Navigation]}
                         className="mySwiper1">
                         {
                              team.map((team, index) => {
                                   return (
                                        <SwiperSlide key={index}>
                                             <CarouselItem team={team} key={team.id} />
                                        </SwiperSlide>
                                   )
                              })
                         }
                    </Swiper>
                    
               )
               }
               {!mobile && (
                    <Swiper
                         {...SwiperProps}
                         modules={[Autoplay, Pagination, Navigation]}
                         className="mySwiper2">
                         {
                              team.map((team, index) => {
                                   return (
                                        <SwiperSlide key={index}>
                                             <CarouselItem team={team} key={team.id} />
                                        </SwiperSlide>
                                   )
                              })
                         }
                    </Swiper>
               )}
          </>
     );
};

export default CarouselDetail;