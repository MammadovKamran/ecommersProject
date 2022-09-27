import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import './SlayderStyle.css'
import { Pagination } from "swiper";
import {  useSelector } from "react-redux"


function Slayder() {

    const {category } = useSelector(state => state.category)
    console.log(category);
    
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