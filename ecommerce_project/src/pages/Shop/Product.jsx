import React from "react";
import style from "./shop.module.css";
import { Link } from "react-router-dom";
const Product = ({ product }) => {
  console.log(product);
  return (
    <div>
      <div className={style.productCardHeader}>
        <img src={product.firstImg} alt="product image" />
      </div>
      <div className={style.productCardMain}>
        <Link>
          
          <h5>{product.name}</h5>
        </Link>
        <div>
          <span>${product.price}</span>
          <span>{product.discountPercent ? product.price * product.discountPercent : null}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
