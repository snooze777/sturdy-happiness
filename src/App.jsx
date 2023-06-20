/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import FilterableProductTable from './FilterableProductTable';
import PRODUCTS from './products';

import 'bootstrap/scss/bootstrap.scss';
import './App.css';

const App = () => (
  <div className="App">
    <FilterableProductTable products={PRODUCTS} />
  </div>
);

export default App;
