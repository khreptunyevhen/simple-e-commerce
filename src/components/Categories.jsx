import React, { useContext } from "react";
import ProductContext from "./ProductContext";
import { Link } from "react-router-dom";

import "./styles/categories.scss";

const Categories = () => {
  const { productsInfo } = useContext(ProductContext);

  const productCounts = {
    men: productsInfo.men?.length,
    women: productsInfo.women?.length,
    kids: productsInfo.kids?.length,
  };

  return (
    <section className="categories">
      <div className="container">
        <h2>Shop by categories</h2>
        <p>Pick a category you need</p>
        <div className="wrapper">
          {Object.entries(productCounts).map((product, index) => {
            return (
              <Link to={"/shop"} key={`product-${index}`} className="category">
                <h2>{product[0]}</h2>
                <p>{product[1]} products</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
