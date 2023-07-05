import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import CartProduct from "../Home/CartProduct";
import "./style/similarproducts.css";

const SimilarProduct = ({ product }) => {
  const URL_BASE = import.meta.env.VITE_REACT_APP_URL  //
  const url = `${URL_BASE}products?categoryId=${product?.categoryId}`;  //

  const [filterProducts, getProductByCategory] = useFetch(url);

  useEffect(() => {
    if (product) {
      getProductByCategory();
    }
    if (window) {
      window.scrollTo(0, 0);
    }
  }, [product]);

  return (
    <section className="similarProduct__container">
      <h2 className="similarProduct__title">Discover similar Products</h2>
      <div className="similarProduct__products">
        {filterProducts?.map((prod) => {
          if (prod.id !== product.id) {
            return <CartProduct key={prod.id} product={prod} />;
          }
        })}
      </div>
    </section>
  );
};

export default SimilarProduct;
