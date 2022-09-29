import React from 'react'
import w from './whishList.module.scss'
import joystick from "../../assets/image/joystick.png"

function WhishList() {
    return (
        <>
            <div className={w.whish}>
                <div className="container" >
                    <div className={w.whishl}>
                        <p>My Wish List on eTrade</p>
                    </div>
                    <div className={`${w.whishrl} .row`}>
                        <div className="col-1"></div>
                        <div className="col-5">
                            <div className={w.whishP}>
                                <p>Product</p>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className={w.whishP}>
                                <p>Unit Price</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className={w.whishP}>
                                <p>Stock Status</p>
                            </div>
                        </div>
                    </div>




                    {/* //// Productslar bura gelecek  */}
                    <div className={`${w.whishR} .row`} >
                        <div className="col-1">
                            <div className={w.x}>
                                <i class="fa-solid fa-x"></i>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className={w.whishImg}>
                                <img src={joystick} alt="" />
                                <p>Wireless PS Handler</p>
                            </div>
                        </div>

                        <div className="col-2">
                            <div className={w.whishP}>
                                <p>$124.00</p>
                            </div>
                        </div>

                        <div className="col-2">
                            <div className={w.whishP}>
                                <p>In Stock</p>
                            </div>
                        </div>

                        <div className="col-2">
                            <div className={w.whisha}>
                                <button>
                                    Add to Cart
                                </button>

                            </div>
                        </div>
                    </div>



                    {/* // Mobile versiya */}

                    <div className={`${w.whishMr1} row`}>
                        <div className="col-3">
                            <div className={w.whishMImg}>
                                <img src={joystick} alt="" />
                            </div>
                        </div>
                        <div className="col-9">
                            <div className={w.whishMl}>
                                <div className={`${w.whishM1} .col-12`}>
                                    <p>Wrileless PS Handler</p>
                                    <p><i class="fa-solid fa-x"></i></p>
                                </div>
                                <div className={`${w.whishM2} .col-12`}>
                                    <p>Price :</p>
                                    <p>$124.00</p>
                                </div>
                                <div className={`${w.whishM2} .col-12`}>
                                    <p>Status :</p>
                                    <p>In Stock</p>
                                </div>
                                <div className={`${w.whishM3} .col-12`}>
                                    <button>
                                        Add to Cart
                                    </button>
                                </div>


                            </div>
                        </div>

                    </div>




                </div>
            </div>



        </>
    )
}

export default WhishList