import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App";
import ProductContext from "./components/ProductContext";
import { useImmer } from "use-immer";

import { products } from "./common/productsDB";

const Main = () => {
  const [productsInfo, setProductsInfo] = useImmer(products);
  const [addCartsList, setAddCartsList] = useImmer([]);
  const [addWishlistsList, setWishlistList] = useImmer([]);
  const [counts, setCounts] = useImmer({});
  const [searchProductsInfo, setSearchProductsInfo] = useImmer(products);

  // useEffect(() => {
  //   (async () => {
  //     const fetchData = await fetch(`/productsDB.json`, {
  //       method: "GET",
  //       headers: {
  //         Accept: "application/json",
  //       },
  //     });

  //     const data = await fetchData.json();

  //     setProductsInfo(data);
  //   })();
  // }, []);

  // console.log("productsInfo", productsInfo);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <ProductContext.Provider
          value={{
            productsInfo,
            setProductsInfo,
            addCartsList,
            setAddCartsList,
            addWishlistsList,
            setWishlistList,
            counts,
            setCounts,
            searchProductsInfo,
          }}
        >
          <App />
        </ProductContext.Provider>
      </BrowserRouter>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
