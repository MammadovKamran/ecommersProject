import React, { } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./swiper2.css";

// import required modules
import { Mousewheel, Pagination } from "swiper";

export default function App() {
    return (
        <>
            <Swiper
                loop={true}
                direction={"vertical"}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}

                pagination={{
                    clickable: true,
                }}
                modules={[Mousewheel, Pagination]}
                className="ss"
            >

                <SwiperSlide>
                    <div className="sliderbox1">

                    </div>
                    <div className="sliderbox2">
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>


            </Swiper>
        </>
    );
}
