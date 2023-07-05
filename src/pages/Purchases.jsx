import { useEffect } from "react";
import usePurchases from "../hooks/usePurchases";
import ProductPurchases from "../components/Purchases/ProductPurchases";
import "../components/Purchases/productPurchases.css";

const Purchases = () => {
  const { purchases, getAllProductsPurchased } = usePurchases();

  useEffect(() => {
    getAllProductsPurchased();
  }, []);

  console.log(purchases);

  return (
    <div className="purchases__title">
      <h2>My Purchases</h2>
      <div>
        {purchases?.map((prodPurchases) => (
          <ProductPurchases
            key={prodPurchases.id}
            prodPurchases={prodPurchases}
          />
        ))}
      </div>
    </div>
  );
};

export default Purchases;
