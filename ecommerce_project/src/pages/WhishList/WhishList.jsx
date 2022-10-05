import React, { useState } from "react";
import w from "./whishList.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { updateSelectedUserCard, deleteSelectedUserWishlist } from "./../../redux/userSlice/userSlice";

function WhishList() {
  const selectedUser = useSelector((state) => state.user.selectedUser);

  const [wishList, setWishList] = useState(selectedUser.wishlist);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    if (selectedUser) {
      dispatch(updateSelectedUserCard(product));
    } else {
      alert("Please Login First");
    }
  };
  const handleDeleteWishlist = (product) => {
    if (selectedUser) {
      dispatch(deleteSelectedUserWishlist(product));
    } else {
      alert("Please Login First");
    }
  };

  return (
    <>
      <Header />
      <div className={w.whish}>
        <div className="container">
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

          {wishList.map((item) => (
            <div className={`${w.whishR} .row`}>
              <div className="col-1">
                <button className={w.x} onClick={() => handleDeleteWishlist(item)}>
                  <i className="fa-solid fa-x"></i>
                </button>
              </div>
              <div className="col-5">
                <div className={w.whishImg}>
                  <img src={item.firstImg} alt="" />
                  <p>{item.name}</p>
                </div>
              </div>

              <div className="col-2">
                <div className={w.whishP}>
                  <p>{item.price}</p>
                </div>
              </div>

              <div className="col-2">
                <div className={w.whishP}>
                  <p>{item.stock}</p>
                </div>
              </div>

              <div className="col-2">
                <div className={w.whisha}>
                  <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                </div>
              </div>
            </div>
          ))}

          {/* // Mobile versiya */}

          {wishList.map((item) => {
            return (
              <div className={`${w.whishMr1} row`}>
                <div className="col-3">
                  <div className={w.whishMImg}>
                    <img src={item.firstImg} alt="" />
                  </div>
                </div>
                <div className="col-9">
                  <div className={w.whishMl}>
                    <div className={`${w.whishM1} .col-12`}>
                      <p>{item.name}</p>
                      <button onClick={() => handleDeleteWishlist(item)}>
                        <i className="fa-solid fa-x"></i>
                      </button>
                    </div>
                    <div className={`${w.whishM2} .col-12`}>
                      <p>Price :</p>
                      <p>{item.price}</p>
                    </div>
                    <div className={`${w.whishM2} .col-12`}>
                      <p>Status :</p>
                      <p>{item.stock}</p>
                    </div>
                    <div className={`${w.whishM3} .col-12`}>
                      <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default WhishList;
