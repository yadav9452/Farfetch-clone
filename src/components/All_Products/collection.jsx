import { Category } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "../../css/collection.css";

const Collection = ({ gender, image, title,Category, description, price, id }) => {
  return (
    <div className="product">
      <Link to={`/${gender}/${id}`}>
        <div className="item">
          <img src={image} />
          <p>{title}</p>
          <h4>{Category}</h4>
          <p>{description}</p>
          <p>HK${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Collection;
