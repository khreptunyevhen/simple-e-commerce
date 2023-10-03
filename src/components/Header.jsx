import React, { useState, useContext, useEffect } from "react";
import ProductContext from "./ProductContext";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Hamburger from "./Hamburger";
import { FaSistrix, FaRegHeart } from "react-icons/fa";
import { IoCartOutline, IoCartSharp } from "react-icons/io5";
import "./styles/header.scss";

function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { addWishlistsList, setWishlistList } = useContext(ProductContext);
  const { addCartsList, setAddCartsList } = useContext(ProductContext);
  const { counts, setCounts } = useContext(ProductContext);
  const { productsInfo, setProductsInfo } = useContext(ProductContext);
  const [searchData, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const { searchProductsInfo, setSearchProductsInfo } =
    useContext(ProductContext);
  const { men, women, kids } = searchProductsInfo;
  const navigate = useNavigate();

  let cartCount = 0;
  Object.values(counts).forEach((item) => {
    cartCount += item;
  });

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

  useEffect(() => {
    const searchWords = searchData.replace(" ", "");
    const searchMen = men?.filter((item) => {
      const nameModel = `${item?.name}${item?.model}`
        .toLowerCase()
        .replaceAll(" ", "");
      if (nameModel.includes(searchWords)) {
        return true;
      }
      return false;
    });
    const searchWomen = women?.filter((item) => {
      const nameModel = `${item?.name}${item?.model}`
        .toLowerCase()
        .replaceAll(" ", "");
      if (nameModel.includes(searchWords)) {
        return true;
      }
      return false;
    });
    const searchKids = kids?.filter((item) => {
      const nameModel = `${item?.name}${item?.model}`
        .toLowerCase()
        .replaceAll(" ", "");
      if (nameModel.includes(searchWords)) {
        return true;
      }
      return false;
    });
    setProductsInfo({ men: searchMen, women: searchWomen, kids: searchKids });
    navigate("/shop");
  }, [searchData]);

  return (
    <header className="header">
      <div className="header-wrapper container">
        <Link to="/" className="logo">
          M<span className="hidden">iralou</span>
        </Link>
        <NavBar navMenu="dekstop-menu" mobileMenu={mobileMenu} />
        <div className="nav-buttons">
          <input
            type={show ? "text" : "hidden"}
            placeholder="Type to filter..."
            onChange={(e) => {
              setSearch(e.target.value.toLowerCase());
            }}
          />
          <button>
            <FaSistrix
              size={20}
              className="button"
              style={{ color: "#0e0e0e" }}
              onClick={() => {
                setShow(!show);
              }}
            />
          </button>
          <Link to="/wishlist">
            <FaRegHeart
              size={20}
              className="button"
              style={{ color: "#0e0e0e" }}
            />
            <span className="counter">{addWishlistsList.length}</span>
          </Link>
          <Link to="/cart">
            {addCartsList.length > 0 ? (
              <IoCartSharp
                size={20}
                className="button"
                style={{ color: "#0e0e0e" }}
              />
            ) : (
              <IoCartOutline
                size={20}
                className="button"
                style={{ color: "#0e0e0e" }}
              />
            )}
            <span className="counter">{addCartsList.length}</span>
          </Link>
        </div>
        <Hamburger mobileMenu={mobileMenu} setMobileMenu={setMobileMenu} />
        <NavBar navMenu="mobile-menu" mobileMenu={mobileMenu} />
      </div>
    </header>
  );
}

export default Header;
