import React, { useState } from "react";

interface ProductCardProps {
  product: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <button
        className="wishlist-button"
        style={{ color: isWishlisted ? "red" : "black" }}
        onClick={() => setIsWishlisted(!isWishlisted)}
      >
        Wishlist
      </button>
      <div className="view-product">
        <button>View Product</button>
      </div>
    </div>
  );
};

export default ProductCard;
