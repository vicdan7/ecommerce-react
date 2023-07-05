import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { getAllProductsThunk } from "../../store/slices/products.slice";
import { useDispatch } from "react-redux";
import "./styles/filterCategory.css";


const FilterCategory = ({ setFromTo }) => {

  const URL_BASE = import.meta.env.VITE_REACT_APP_URL //
  const dispatch = useDispatch();

  const url = `${URL_BASE}/categories`; //
  const initFromTo = {
    from: "",
    to: "",
  };
  const [categoryIsShow, setCategoryIsShow] = useState(true);
  const [categories, getAllCategories] = useFetch(url);

  useEffect(() => {
    getAllCategories();
  }, []);

  const resetFilterPrice = () => {
    setFromTo(initFromTo);
  };

  const handleClickCategories = (id) => {
    const url = `${URL_BASE}/products?categoryId=${id}`; //
    resetFilterPrice();
    dispatch(getAllProductsThunk(url));
  };

  const handleClickAllProducts = () => {
    resetFilterPrice();
    dispatch(getAllProductsThunk());
  };

  const changeShowCategory = () => {
    setCategoryIsShow(!categoryIsShow);
  };

  return (
    <article className="category">
      <div onClick={changeShowCategory} className="category_filter">
        <h3 className="category_title">Category</h3>
        <i
          className={`btn-category-down bx ${
            categoryIsShow ? "bx-chevron-down" : "bx-chevron-up"
          }`}
        ></i>
      </div>
      <hr className="category_line" />

      {categoryIsShow && (
        <ul className="category__list">
          <li
            className="category__item-Products"
            onClick={handleClickAllProducts}
          >
            All Products
          </li>
          {categories?.map((category) => (
            <li
              className="category__item-Products"
              onClick={() => handleClickCategories(category.id)}
              key={category.id}
            >
              {category.name}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default FilterCategory;
