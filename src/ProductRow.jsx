/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';

const ProductRow = ({ product }) => {
  const name = (
    <span style={{ color: product.stocked ? 'lightgreen' : 'green' }}>
      {product.name}
    </span>
  );

  const price = (
    product.stocked
      ? <span style={{ color: 'lightgreen' }}>{product.price}</span>
      : <span style={{ color: 'red' }}>{product.price}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
};

export default ProductRow;
