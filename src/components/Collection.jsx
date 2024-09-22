import { Data } from "../utils/Data";

const Collection = () => {
  return (
    <div className="container">
      <div className="collection-box">
        {Data.map((item) => (
          <div className="collection-images-list" key={item.id}>
            <img src={item.image_url} alt={item.caption} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;


