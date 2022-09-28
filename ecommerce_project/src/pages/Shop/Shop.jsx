import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./shop.module.css";
import { fetchProducts, selectAllProducts } from "../../redux/products/productSlice";
import Product from "./Product";

const Shop = () => {
  const allProducts = useSelector(selectAllProducts);
  const dispatch = useDispatch();
  console.log(allProducts);

  const [colors, setColors] = useState(["white", "black", "red", "blue"]);

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
              <select>
                {allProducts.map((product) => (
                  <option key={product.id} value={product.category}>
                    {product.category}
                  </option>
                ))}
              </select>

              <select>
                <option>Color</option>
                {colors.map((color) => (
                  <option>{color}</option>
                ))}
              </select>
              <select>
                <option min="100" max="500">
                  Price Range
                </option>
                <option min="100" max="500">
                  0-100
                </option>
                <option min="100" max="500">
                  100-500
                </option>
                <option min="100" max="500">
                  500-1000
                </option>
              </select>
            </div>

            <select>
              <option>Sort By Name</option>
              <option>Sort By Price</option>
            </select>
          </div>

          <div className={style.shopProducts}>
            {allProducts.map((product) => (
              <Product product={product} className={style.shopProductCard} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
