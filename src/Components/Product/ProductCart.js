import React from "react";
import StarIcon from "@mui/icons-material/Star";
import './ProductCart.css';
import { Link } from "react-router-dom";

const ProductCard = ({ Product }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <Link to = {`/Product/${Product.id}`}>
        
        <img src={Product.image} alt={Product.title} />

        </Link>
      </div>
      <div className="product-details">
        <h3 className="product-name">{Product.title}</h3>
        <p className="product-category">{Product.category}</p>
        
        <div className="product-rating">
          <StarIcon sx={{ color: "yellow" }} />
          <span>{Product.rating.rate}</span>
          <span>({Product.rating.count} reviews)</span>
        </div>
        <p className="product-price">&#8377;{Product.price}</p>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
