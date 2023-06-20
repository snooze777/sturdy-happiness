/* eslint-disable react/prop-types */
import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

const ProductTable = ({ products, inStockOnly, filterText }) => {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (inStockOnly && product.stocked === false) {
      return;
    }

    if (product.name.indexOf(filterText) === -1) {
      return;
    }

    if (product.category !== lastCategory) {
      lastCategory = product.category;
      rows.push(<ProductCategoryRow key={lastCategory} category={lastCategory} />);
    }

    rows.push(<ProductRow key={product.name} product={product} />);
  });

  return (
    <table className="table">
      <thead>
        <tr className="table-dark">
          <th>Nom</th>
          <th>Prix</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
};

export default ProductTable;
