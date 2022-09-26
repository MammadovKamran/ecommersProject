import React from "react";
import c from "./home.module.scss"
import Slayder from './Swiper/Slayder'
import {  useSelector } from "react-redux"

function Home() {

  const {category } = useSelector(state => state.category)

  console.log(category);
  return (
    <>

     
        <div className={c.home}>
          <div className="container">
            <p>Categories</p>
            <p>Browse by Category</p>

            <Slayder />
          </div>
        </div>


     

    </>
  )
}

export default Home