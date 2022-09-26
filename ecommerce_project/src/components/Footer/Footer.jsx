import React from 'react'
import "./footer.css"
import f1 from "../../assets/image/f-1.png"
import f2 from "../../assets/image/f-2.png"
import f3 from "../../assets/image/f-3.png"
import f4 from "../../assets/image/f-4.png"

const Footer = () => {
  return (
    <>

      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="f-part1">
                <div className="f-img">
                  <img src={f3} alt="" />
                </div>
                <div className="f-letter">
                  <p>Fast & Secure Delivery</p>
                  <p>Tell about your service.</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="f-part1">
                <div className="f-img">
                  <img src={f1} alt="" />
                </div>
                <div className="f-letter">
                  <p>Money Back Guarantee</p>
                  <p>Within 10 days.</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="f-part1">
                <div className="f-img">
                  <img src={f4} alt="" />
                </div>
                <div className="f-letter">
                  <p>24 Hour Return Policy</p>
                  <p>No question ask.</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="f-part1">
                <div className="f-img">
                  <img src={f2} alt="" />
                </div>
                <div className="f-letter">
                  <p>Pro Quality Support</p>
                  <p>24/7 Live support. </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row rowf-2">
            <div className="col-3">
              <div className="f-letter2">
                <p>Support</p>
                <ul>
                  <li>685 Market Street,</li>
                  <li>Las Vegas, LA 95820,</li>
                  <li>United States.</li>
                  <li>example@domain.com</li>
                  <li>(+01) 850-315-5862</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Footer