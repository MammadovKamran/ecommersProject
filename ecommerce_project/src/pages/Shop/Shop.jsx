import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./shop.module.css";
import {
  fetchProducts,
  selectAllProducts,
} from "../../redux/products/productSlice";
import Product from "./Product";
import Header from './../../components/Header/Header'
import Footer from './../../components/Footer/Footer'

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
    <>
      <Header />
      <div className="container">
        <div className={`${styles.shopContainer}`}>
          <div className={styles.shopHeader}>
            <div>
              <ul className={styles.axilbreadcrumb}>
                <li className={styles.axilbreadcrumbitem}>
                  <a href="/">Home</a>
                </li>
                <li className={styles.separator}></li>
                <li
                  className={styles.axilbreadcrumbitemactive}
                  aria-current="page"
                >
                  My Account
                </li>
              </ul>
              <h1>Explore All Products</h1>
            </div>
            <div>
              <img
                src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/product-45.png"
                alt=""
              />
            </div>
          </div>

          <div className={styles.shopMain}>
            <div className={styles.shopFilterRow}>
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
                      setPreAndNext([
                        parseInt(e.target.value),
                        prices[prices.indexOf(parseInt(e.target.value)) + 1],
                      ]);
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

            <div className={styles.shopProducts}>
              {preAndNext.length === 0
                ? allProducts.map((product) => {
                  if (category && product.category === category) {
                    return (
                      <Product
                        product={product}
                        className={styles.shopProductCard}
                      />
                    );
                  } else {
                    return (
                      <Product
                        product={product}
                        className={styles.shopProductCard}
                      />
                    );
                  }
                })
                : allProducts.map((product) => {
                  if (
                    category.length === 0 &&
                    color.length === 0 &&
                    product.price >= preAndNext[0] &&
                    product.price <= preAndNext[1]
                  ) {
                    return (
                      <Product
                        product={product}
                        className={styles.shopProductCard}
                      />
                    );
                  } else if (
                    category.length !== 0 &&
                    product.category === category &&
                    color.length !== 0 &&
                    product.color === color &&
                    product.price >= preAndNext[0] &&
                    product.price <= preAndNext[1]
                  ) {
                    return (
                      <Product
                        product={product}
                        className={styles.shopProductCard}
                      />
                    );
                  }
                })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Shop;
