import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./shop.module.css";
import { fetchProducts, selectAllProducts } from "../../redux/products/productSlice";
import Product from "./Product";

const Shop = () => {
  const allProducts = useSelector(selectAllProducts);
  const dispatch = useDispatch();

  const [colors, setColors] = useState(["white", "black", "red", "blue"]);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(null);
  const [color, setColor] = useState("");
  const [prices, setPrices] = useState([0, 100, 500, 1000]);
  const [preAndNext, setPreAndNext] = useState([]);

  const priceFilterOptions = prices.map((price, index) => {
    if (index !== prices.length - 1) {
      return (
        <option key={index} value={price}>
          {price}-{prices[index + 1]}
        </option>
      );
    }
  });

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="container">
      <div className={style.shopContainer}>
        <div className={style.shopHeader}>
          <div>
            <ul className={style.axilbreadcrumb}>
              <li className={style.axilbreadcrumbitem}>
                <a href="/">Home</a>
              </li>
              <li className={style.separator}></li>
              <li className={style.axilbreadcrumbitemactive} aria-current="page">
                My Account
              </li>
            </ul>
            <h1>Explore All Products</h1>
          </div>
          <div>
            <img src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-45.png" alt="" />
          </div>
        </div>

        <div className={style.shopMain}>
          <div className={style.shopFilterRow}>
            <div>
              <select
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <option>Categories</option>
                {allProducts.map((product) => (
                  <option key={product.id} value={product.category}>
                    {product.category}
                  </option>
                ))}
              </select>

              <select
                value={color}
                onChange={(e) => {
                  setColor(e.target.value);
                }}
              >
                <option>Color</option>
                {colors.map((color) => (
                  <option>{color}</option>
                ))}
              </select>
              {/* 
              price filter 
            */}
              <select
                value={price === null ? 0 : price}
                onChange={(e) => {
                  setPrice((pre) => {
                    setPreAndNext([parseInt(e.target.value), prices[prices.indexOf(parseInt(e.target.value)) + 1]]);
                    return parseInt(e.target.value);
                  });
                }}
              >
                {priceFilterOptions}
              </select>
            </div>

            <select>
              <option>Sort By Name</option>
              <option>Sort By Price</option>
            </select>
          </div>

          <div className={style.shopProducts}>
            {preAndNext.length === 0
              ? allProducts.map((product) => {
                  if (category && product.category === category) {
                    return <Product product={product} className={style.shopProductCard} />;
                  } else {
                    return <Product product={product} className={style.shopProductCard} />;
                  }
                })
              : allProducts.map((product) => {
                  if (
                    category.length === 0 &&
                    color.length === 0 &&
                    product.price >= preAndNext[0] &&
                    product.price <= preAndNext[1]
                  ) {
                    return <Product product={product} className={style.shopProductCard} />;
                  } else if (
                    category.length !== 0 &&
                    product.category === category &&
                    color.length !== 0 &&
                    product.color === color &&
                    product.price >= preAndNext[0] &&
                    product.price <= preAndNext[1]
                  ) {
                    return <Product product={product} className={style.shopProductCard} />;
                  }
                })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
