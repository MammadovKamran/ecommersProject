import React from "react";
import c from "./home.module.scss"
import "../../../src/App.css"
import Slayder from './Swiper/Slayder'
import headPhones from "../../assets/image/home-headphonesimg.png"
import choose1 from "../../assets/image/choose1.png"
import choose2 from "../../assets/image/choose2.png"
import choose3 from "../../assets/image/choose3.png"
import choose4 from "../../assets/image/choose4.png"
import choose5 from "../../assets/image/choose5.png"
import vr1 from "../../assets/image/vr1.png"
import vr2 from "../../assets/image/vr2.png"
import hwatch from "../../assets/image/h-watch.jpg"

function Home() {




  return (
    <>


      <div className={c.home}>
        <div className="container">
          <div className={c.homeLet1}>
            <p> <i class="fa-solid fa-layer-group"></i> Categories</p>
            <p>Browse by  Category</p>
          </div>
          Slider
          <Slayder />
          <div className={c.homePart1}>
            <div className="row">
              <div className="col-6 col-xs-12 col-sm-12">
                <div className={c.homeHeadphoneL}>
                  <p><i class="fa-solid fa-headphones"></i>Don’t Miss!!</p>
                  <p>Enhance Your <br /> Music Experience</p>
                  timer
                  <button>Check iy Out</button>
                </div>
              </div>
              <div className="col-6 col-xs-12 col-sm-12">
                <div className={c.homeHeadphonesimg}>
                  <img src={headPhones} alt="" />
                </div>
              </div>
            </div>

          </div>

          <div className={c.homeFeedback}>

          </div>

          <div className={c.homeChoose}>
            <p> <i class="fa-regular fa-thumbs-up"></i> Why Us</p>
            <p>Why People Choose Us</p>
            <div className={`${c.Chooserow} row`}>
              <div className={c.chooseImg}>
                <img src={choose1} alt="" />
                <p>Fast & Secure <br /> Delivery</p>
              </div>
              <div className={c.chooseImg}>
                <img src={choose2} alt="" />
                <p>100% Guarantee <br /> On Product</p>
              </div>
              <div className={c.chooseImg}>
                <img src={choose3} alt="" />
                <p>24 Hour Return <br /> Policy</p>
              </div>
              <div className={c.chooseImg}>
                <img src={choose4} alt="" />
                <p>24 Hour Return <br /> Policy</p>
              </div>
              <div className={c.chooseImg}>
                <img src={choose5} alt="" />
                <p>Next Level Pro <br /> Quality</p>
              </div>
            </div>
          </div>

          <div className={c.homevr}>
            <div className="row">
              <div className={`${c.col6} col-6 col-xs-12 col-sm-12`}>
                <div className={c.vr1i}>
                  <img src={vr1} alt="" />
                </div>
                <div className={c.vr1l}>
                  <p>Rich sound </p>
                  <p>for less.</p>
                  <a href="#">Collections <i class="fa-solid fa-arrow-right"></i> </a>
                </div>
              </div>
              <div className={`${c.col6} col-6 col-xs-12 col-sm-12`}>
                <div className={c.vr1i}>
                  <img src={vr2} alt="" />
                </div>
                <div className={c.vr2l}>
                  <a href="#">50% Offer in Winter </a>
                  <p>Get VR  </p>
                  <p>Reality Glass.</p>
                </div>
              </div>

            </div>
          </div>

          <div className={c.hsubs}>
            <img src={hwatch} alt="" />
            <div className={c.hsubsl}>
              <p> <i class="fa-solid fa-envelope"></i> Newsletter</p>
              <p>Get weekly update</p>
              <button href="#">Subscribe</button>
            </div>
          </div>

        </div>





      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />





    </>
  )
}

export default Home