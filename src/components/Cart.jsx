import React, { useContext, useEffect } from "react";
import ProductContext from "./ProductContext";
import SectionHeader from "./SectionHeader";
import { Link } from "react-router-dom";
import { useImmer } from "use-immer";

import "./styles/cart.scss";

const Cart = () => {
  const { addCartsList, setAddCartsList } = useContext(ProductContext);
  const { counts, setCounts } = useContext(ProductContext);
  const [totalPrice, setTotalPrice] = useImmer("");

  useEffect(() => {
    const retriveProducts = JSON.parse(localStorage.getItem("add-to-cart"));
    if (retriveProducts) setAddCartsList(retriveProducts);
  }, []);

  useEffect(() => {
    localStorage.setItem("add-to-cart", JSON.stringify(addCartsList));
  }, [addCartsList]);

  useEffect(() => {
    calcTotalPrice();
  }, [addCartsList, counts]);

  const incrementCount = (productId) => {
    if (counts[productId] > 8) {
      return;
    }

    setCounts((draft) => {
      if (draft[productId]) {
        draft[productId] = draft[productId] + 1;
      } else {
        draft[productId] = 2;
      }
    });
  };

  const decrementCount = (productId) => {
    if (counts[productId] < 1) {
      return;
    }

    setCounts((draft) => {
      if (draft[productId] && draft[productId] > 0) {
        draft[productId] = draft[productId] - 1;
      }
    });
  };

  const calcTotalPrice = () => {
    let total = 0;

    addCartsList.forEach((item) => {
      const productId = item.id;
      const quantity = counts[productId] || 1;

      total += item.price * quantity;
    });

    setTotalPrice(total);
  };

  // const deleteCard = (index) => {
  //   const newList = [...addCartsList];
  //   console.log(addCartsList);
  //   newList.splice(index, 1);
  //   console.log(index);
  //   console.log(newList);

  //   setAddCartsList(newList);
  // };

  return (
    <section className="cart">
      <SectionHeader title="Shopping cart" />
      {!addCartsList.length && (
        <div className="empty">
          <div className="container">
            <h2>Looks like your cart is empty...</h2>
            <p>
              To see which products are in cart go to shop and click on "Add to
              cart" button. For now there is no products added into the cart.
            </p>
            <Link className="btn" to={"/shop"}>
              Go to shop
            </Link>
          </div>
        </div>
      )}
      <div className="container">
        <div className="wrapper">
          {addCartsList.length > 0 && (
            <>
              <h2>Product</h2>
              <div className="cart-info">
                <div className="card-products">
                  {addCartsList.map((card, index) => {
                    const productId = card.id;

                    return (
                      <div className="cart-product" key={`cart-card-${index}`}>
                        <button
                          onClick={() => {
                            const newList = [...addCartsList];

                            newList.splice(index, 1);

                            setAddCartsList(newList);
                          }}
                        >
                          X
                        </button>
                        <div className="img-block">
                          <img src={card.image} alt={card.name} />
                        </div>
                        <p>{card.model}</p>
                        <p className="counter">
                          <button
                            onClick={() => decrementCount(productId)}
                            style={{
                              color: counts[productId] === 0 ? "gray" : "black",
                              cursor:
                                counts[productId] === 0
                                  ? "not-allowed"
                                  : "pointer",
                            }}
                          >
                            -
                          </button>
                          {counts[productId] || 1}
                          <button
                            onClick={() => incrementCount(productId)}
                            style={{
                              color: counts[productId] === 9 ? "gray" : "black",
                              cursor:
                                counts[productId] === 9
                                  ? "not-allowed"
                                  : "pointer",
                            }}
                          >
                            +
                          </button>
                        </p>
                        <p className="price">{card.price}$</p>
                      </div>
                    );
                  })}
                </div>
                <table className="bill-info">
                  <thead>
                    <tr>
                      <th>Cart totals</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        Subtotals: <span>{totalPrice}$</span>
                      </td>
                    </tr>
                    <tr>
                      <th>Shipping</th>
                    </tr>
                    <tr>
                      <td>Tax: 5%</td>
                    </tr>
                    <tr>
                      <td>Flat Rate: 15$</td>
                    </tr>
                    <tr>
                      <td>Where to: Canada, QC</td>
                    </tr>
                  </tbody>
                  <thead>
                    <tr>
                      <th>
                        Total <span>{totalPrice * 1.05 + 15}$</span>
                      </th>
                    </tr>
                  </thead>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cart;
