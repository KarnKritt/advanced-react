import React from "react";
import PropTypes from "prop-types";
import deafultImage from "../../../assets/default-image.jpeg";

const Product = ({ image, name, price }) => {
  const url = image && image.url;
  return (
    <article className="product">
      {/* <h4>single Product</h4> */}
      <img src={url || deafultImage} alt={name || "default name"} />
      <h4>{name}</h4>
      <p>$ {price || 9999}</p>
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
// Product.defaultProps = {
//   name: "default name",
//   price: 9999.0,
//   image: deafultImage,
// };

export default Product;
