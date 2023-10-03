import React, { useContext, useEffect, useState } from "react";
import { useImmer } from "use-immer";
import { useParams } from "react-router-dom";
import ProductContext from "./ProductContext";
import "./styles/productCard.scss";
import SectionHeader from "./SectionHeader";

const ProductCard = () => {
  const { id } = useParams();
  const {
    productsInfo,
    addCartsList,
    setAddCartsList,
    addWishlistsList,
    setWishlistList,
  } = useContext(ProductContext);
  let productWithId = null;

  const photosCount = [1, 2, 3, 4, 5, 6];

  for (const category in productsInfo) {
    const productsWithCategory = productsInfo[category];

    productWithId = productsWithCategory.find((item) => item.id === id);

    if (productWithId) {
      break;
    }
  }

  const [card, setCard] = useImmer(productWithId);

  useEffect(() => {
    const retriveProducts = JSON.parse(localStorage.getItem("add-to-cart"));
    const retriveProductsWishlist = JSON.parse(
      localStorage.getItem("add-to-wishlist")
    );
    if (retriveProducts) setAddCartsList(retriveProducts);
    if (retriveProductsWishlist) setWishlistList(retriveProductsWishlist);
  }, []);

  useEffect(() => {
    if (addCartsList?.length) {
      // only store the state if cards exists and it's length is greater than 0
      localStorage.setItem("add-to-cart", JSON.stringify(addCartsList));
    }

    if (addWishlistsList?.length) {
      // only store the state if cards exists and it's length is greater than 0
      localStorage.setItem("add-to-wishlist", JSON.stringify(addWishlistsList));
    }
  }, [addCartsList, addWishlistsList]);

  const addCard = (theCard, cardsList, listState) => {
    for (const card of cardsList) {
      if (card?.id === id) {
        return;
      }
    }

    const newCardsList = [...cardsList, theCard];
    listState(newCardsList);
  };

  return (
    <>
      <SectionHeader title="Shop" />
      <div className="container">
        <div className="card">
          <div className="images">
            {photosCount?.map((photo, index) => {
              return (
                <div key={`photo-product-${index}`} className="images-block">
                  <img
                    src={`/${card?.image}`}
                    alt={`${card?.name} ${card?.model}`}
                  />
                </div>
              );
            })}
          </div>
          <div className="description">
            <h2>{`${card?.name} ${card?.model}`}</h2>
            <p className="price">${card?.price}</p>
            <div className="sizes">
              {card?.sizes?.map((size, index) => {
                return (
                  <div
                    className={size.inStock ? "size" : "size unavailable"}
                    key={`size-${index}`}
                  >
                    {size.sizeShoe}
                  </div>
                );
              })}
            </div>
            <p>{productWithId?.about}</p>
            <div className="buttons">
              <button
                className="btn"
                onClick={() => addCard(card, addCartsList, setAddCartsList)}
              >
                Add to card
              </button>
              <button
                className="btn"
                onClick={() => addCard(card, addWishlistsList, setWishlistList)}
              >
                Add to wishlist
              </button>
            </div>
            {/* TODO: Dropdown description and reviews */}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
