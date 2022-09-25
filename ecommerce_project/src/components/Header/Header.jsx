import React from 'react'
import "./header.css"
import navlogo from "../../assets/image/logo.png"

function Header() {
    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="navbar">
                        <div className="nav-img">
                            <img src={navlogo} alt="" />
                        </div>
                        <div className="nav-menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Shop</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contact</a></li>

                            </ul>
                        </div>
                        <div className="nav-stic">
                            <ul>
                                <li><a href="#"><i class="fa-solid fa-magnifying-glass"></i></a></li>
                                <li><a href="#"><i class="fa-regular fa-heart"></i></a></li>
                                <li><a href="#"><i class="fa-solid fa-cart-plus"></i></a></li>
                                <li><a href="№"><i class="fa-regular fa-user"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Header