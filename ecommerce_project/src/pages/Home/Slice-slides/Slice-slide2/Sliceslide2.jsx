// import React from 'react'
// import Slider from "react-slick";
import img1 from "../../../../assets/image/slickeImg1.png"
import img2 from "../../../../assets/image/slickeImg2.png"
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "./slice2.css"

// function Sliceslide2() {

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     centerMode: true,
//     slidesToScroll: 2,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]

//   };

//   return (



//         <Slider {...settings}>

//           <div className="sliceimg1">
//             <img src={img1} alt="" />
//           </div>
//           <div className="sliceimg2">
//             <img src={img2} alt="" />
//           </div>
//           <div className="sliceimg1">
//             <img src={img1} alt="" />
//           </div>
//              <div className="sliceimg2">
//             <img src={img2} alt="" />
//           </div>




//         </Slider>



//   )
// }

// export default Sliceslide2

import React from 'react'
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "./slice2.css"

function Sliceslide2() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        loop={true}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[ Pagination]}
        className="s"
      >
        <SwiperSlide>
          <div className="sliceimg1">
             <img src={img1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliceimg2">
             <img src={img2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliceimg1">
             <img src={img1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliceimg2">
             <img src={img2} alt="" />
          </div>
        </SwiperSlide>
  

      </Swiper>
    </>
  )
}

export default Sliceslide2