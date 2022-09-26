import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import './SlayderStyle.css'
import { Pagination } from "swiper";

function Slayder() {


    return (
        <>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    
                </SwiperSlide>
          
            </Swiper>
        </>
    )
}

export default Slayder;