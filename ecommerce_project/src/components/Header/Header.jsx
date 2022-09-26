import React,{useState,useRef} from 'react'
import "./header.css"
import navlogo from "../../assets/image/logo.png"
import { Link } from 'react-router-dom'

function Header() {

    const addClass = useRef()

    const [length, setLength] = useState(false)


    function changeBars() {
        setLength(!length)
        addClass.current.classList.toggle("change")
    }

    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="navbar">
                        <div className="nav-img">
                            <img src={navlogo} alt="" />
                        </div>
                        {/* <div className="nav-menu"> */}
                        <div className={`nav-menu ${length ? 'length' : ''}`}>
                            <ul>
                                <li><Link to="/" >Home</Link></li>
                                <li><Link to="/shop" >Shop</Link></li>
                                <li><Link to="/aboutUs" >About</Link></li>
                                <li><Link to="/blog" >Blog</Link></li>
                                <li><Link to="/contactUs" >Contact</Link></li>

                            </ul>
                            
                        </div>
                        <div className="nav-stic">
                            <ul>
                                <li><Link to={"#"}><i className="fa-solid fa-magnifying-glass"></i></Link></li>
                                <li><Link to={"#"}><i className="fa-regular fa-heart"></i></Link></li>
                                <li><Link to={"#"}><i className="fa-solid fa-cart-plus"></i></Link></li>
                                <li><Link to={"№"}><i className="fa-regular fa-user"></i></Link></li>
                            </ul>
                            <div ref={addClass}  onClick={() => changeBars()} className="navBars">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>



                    </div>
                </div>

            </div>


        </>
    )
}

export default Header