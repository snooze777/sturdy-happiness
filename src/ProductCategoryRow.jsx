/* eslint-disable react/prop-types */
import React from 'react';

const ProductCategoryRow = ({ category }) => (
  <tr style={{ backgroundColor: '#a4edf7' }}>
    <td colSpan="2" style={{ backgroundColor: 'transparent' }}>{category}</td>
  </tr>
);

export default ProductCategoryRow;
