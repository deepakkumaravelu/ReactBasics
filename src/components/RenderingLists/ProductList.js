import React from 'react';

const ProductList = (props) => {
  const { product } = props;

  return (
    <div>
      <h2>Products with Rate Less than 10:</h2>
      <ul>
        {product
          .filter((pro) => pro.rate < 10)
          .map((filteredProduct) => (
            <li>
              <strong>Name:</strong> {filteredProduct.name}, <strong>Price:</strong> {filteredProduct.rate}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ProductList;
