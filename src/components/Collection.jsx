import { useState } from "react";
import { Data } from "../utils/Data";

const Collection = () => {
  const [isShow, setIsShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClick = (image) => {
    setSelectedImage(image);
    setIsShow(true);
  };

  const handleClose = () => {
    setIsShow(false);
  };

  return (
    <div className="container">
      <div className="collection-box">
        {Data.map((item) => (
          <div className="collection-images-list" key={item.id}>
            <img
              src={item.image_url}
              alt={item.caption}
              onClick={() => handleClick(item.image_url)}
            />
          </div>
        ))}
      </div>

      {isShow && (
        <div className="modal-container">
          <div className="modal-content">
            <span className="close" onClick={handleClose}>
              &times;
            </span>
            <div className="modal-img">
              <img src={selectedImage} alt="selected" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Collection;
