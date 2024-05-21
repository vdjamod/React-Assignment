import React from "react";
import ProductCard from "./ProductCard";

interface SearchResultsProps {
  products: any[];
}

const SearchResults: React.FC<SearchResultsProps> = ({ products }) => {
  return (
    <div className="search-results">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
};

export default SearchResults;
