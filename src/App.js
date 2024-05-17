import "./App.css";
import React, { useEffect, useState } from "react";
import searchImages from "./UnsplashApi";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";

function App() {
  const [images, setImages] = useState([]);

   useEffect(() => {
    handleSubmit("nature");
  }, []);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);
  };


  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
