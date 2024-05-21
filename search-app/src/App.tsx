import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import { useFakerData } from "./hooks/useFakerData";
import "./App.scss";

const App: React.FC = () => {
  const [query, setQuery] = useState("");
  const products = useFakerData(query);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
  };

  return (
    <div className="app">
      <SearchBar onSearch={handleSearch} />
      <SearchResults products={products} />
    </div>
  );
};

export default App;
