import { useNavigate } from "react-router-dom";
import "./styles/cartproducts.css";
import useCrudCart from "../../hooks/useCrudCart";

const CartProduct = ({ product }) => {
  const navigate = useNavigate();
  const { addProductToCart } = useCrudCart();

  const handleSelecProduct = () => {
    navigate(`/product/${product.id}`);
  };

  const handleBtnClick = async (e) => {
    e.stopPropagation();
    const data = {
      quantity: 1,
      productId: product?.id,
    };
    addProductToCart(data);
  };

  return (
    <article className="product" onClick={handleSelecProduct}>
      <header className="product__header">
        <img
          className="product__img product__img-1"
          src={product.images[0].url}
          alt=""
        />
        <img
          className="product__img product__img-2"
          src={product.images[1].url}
          alt=""
        />
      </header>
      <div className="product__body">
        <section className="product__section">
          <h4 className="product__subtitle">{product.brand}</h4>
          <h3 className="product__title">{product.title}</h3>
        </section>
        <div className="product__price">
          <span className="product__price-label">Price</span>
          <span className="product__price-value">{product.price}</span>
          <button className="product__btn" onClick={handleBtnClick}>
            <i className="bx bx-cart-alt product__btn-icon"></i>
          </button>
        </div>
      </div>
    </article>
  );
};

export default CartProduct;
