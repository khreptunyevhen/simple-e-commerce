import React, { useContext } from "react";
import MainSlider from "./MainSlider";
import SmallProductCard from "./SmallProductCard";
import ProductContext from "./ProductContext";
import ReviewsSlider from "./ReviewsSlider";
import Gallery from "./Gallery";
import { Link } from "react-router-dom";
import { webSiteInfoDB } from "../common/webSiteInfoDB.js";
import "./styles/home.scss";
import Categories from "./Categories";

const Home = () => {
  const { mainSlider, homePage, reviewsSlider } = webSiteInfoDB;

  const { productsInfo } = useContext(ProductContext);
  const { men } = productsInfo;

  return (
    <>
      <section className="home">
        <section className="hero">
          <div className="container">
            <MainSlider slides={mainSlider} />
          </div>
        </section>
        <Categories />
        <section className="prodacts">
          <div className="container">
            <h2 className="products-title">Our products</h2>
            <div className="wrapper">
              {men?.map((product, index) => {
                const { name, model, image, price, id } = product;

                if (index > 7) {
                  return;
                }

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
            <Link className="btn" to={"/shop"}>
              Show more
            </Link>
            <div className="about-us">
              <div className="images-block">
                <img src={homePage.image} alt={homePage.title} />
              </div>
              <div className="about-us-description">
                <h2>{homePage.title}</h2>
                <p>{homePage.description}</p>
              </div>
            </div>
          </div>
        </section>
        <ReviewsSlider slides={reviewsSlider} />
      </section>
      <Gallery />
    </>
  );
};

export default Home;
