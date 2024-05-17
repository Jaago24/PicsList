import React from "react";
import ImageShow from "./ImageShow";
import "./imageList.css";

function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />; 

  });
  if(renderedImages.length == 0){
    return <h1>No images found</h1>
  }else{
    return(
        <div className="ImageList">{renderedImages}</div>
      );
  }
}

export default ImageList;
