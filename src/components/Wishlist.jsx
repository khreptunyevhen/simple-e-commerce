import React, { useContext, useEffect } from "react";
import ProductContext from "./ProductContext";
import SectionHeader from "./SectionHeader";
import { Link } from "react-router-dom";

import "./styles/wishlist.scss";

const Wishlist = () => {
  const { addWishlistsList, setWishlistList } = useContext(ProductContext);

  useEffect(() => {
    const retriveProductsWishlist = JSON.parse(
      localStorage.getItem("add-to-wishlist")
    );
    if (retriveProductsWishlist) setWishlistList(retriveProductsWishlist);
  }, []);

  useEffect(() => {
    localStorage.setItem("add-to-wishlist", JSON.stringify(addWishlistsList));
  }, [addWishlistsList]);

  // const deleteCard = () => {
  //   console.log("click");
  // };
  return (
    <>
      <div className="wishlist">
        <SectionHeader title="Wishlist" />
        {!addWishlistsList.length && (
          <div className="empty">
            <div className="container">
              <h2>Looks like your wishlist is empty...</h2>
              <p>
                To see which products are in wishlist go to shop and click on
                "Add to wishlist" button. For now there is no products added
                into the wishlist.
              </p>
              <Link className="btn" to={"/shop"}>
                Go to shop
              </Link>
            </div>
          </div>
        )}
        <div className="container">
          <div className="wrapper">
            {addWishlistsList.length > 0 && (
              <>
                <div className="product-header">
                  <p>product</p>
                  <p className="price">price</p>
                  <p className="status">status</p>
                  <p>action</p>
                </div>
                <div>
                  {addWishlistsList.map((card, index) => {
                    return (
                      <div className="product-item" key={`cart-card-${index}`}>
                        <div className="flex">
                          <div className="img-block">
                            <img src={card.image} alt={card.model} />
                          </div>
                          <p>{card.model}</p>
                        </div>
                        <p className="price">{card.price}$</p>
                        <p className="stock">In stock</p>
                        <button
                          className="btn"
                          onClick={() => {
                            const newList = [...addWishlistsList];
                            newList.splice(index, 1);

                            setWishlistList(newList);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
