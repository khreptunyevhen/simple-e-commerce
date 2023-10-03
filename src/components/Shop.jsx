import React, { useContext, useState } from "react";
import SectionHeader from "./SectionHeader";
import SmallProductCard from "./SmallProductCard";
import ProductContext from "./ProductContext";

import "./styles/shop.scss";

const Shop = () => {
  const { productsInfo } = useContext(ProductContext);
  const productArray = [];

  Object.values(productsInfo).forEach((element) => {
    element.forEach((elem) => {
      productArray.push(elem);
    });
  });

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 16;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = productArray.slice(firstIndex, lastIndex);
  const nPages = Math.ceil(productArray.length / recordsPerPage);
  const numbers = [...Array(nPages + 1).keys()].slice(1);

  console.log(numbers);

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changeCurrentPage = (id) => {
    setCurrentPage(id);
  };

  const nextPage = () => {
    if (currentPage !== nPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section className="shop">
      <SectionHeader title="shop" />
      <div className="container">
        <div>
          <div className="filters"></div>
          <div className="products">
            {records.map((product, index) => {
              const { name, model, image, price, id } = product;

              return (
                <SmallProductCard
                  key={`product-card-${index}${id}`}
                  productId={id}
                  productName={name}
                  productModel={model}
                  productPrice={price}
                  productImage={image}
                />
              );
            })}
          </div>
          <nav>
            <ul className="pagination">
              <li className="page-item">
                <a href="#!" className="page-link" onClick={prevPage}>
                  Prev
                </a>
              </li>
              {numbers.map((num, index) => {
                return (
                  <li
                    className={`page-item ${
                      currentPage === num ? "active" : ""
                    }`}
                    key={`pag-${index}`}
                  >
                    <a
                      href="#!"
                      className="page-link"
                      onClick={() => changeCurrentPage(num)}
                    >
                      {num}
                    </a>
                  </li>
                );
              })}
              <li className="page-item">
                <a href="#!" className="page-link" onClick={nextPage}>
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Shop;
