/* eslint-disable react/prop-types */
import React from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: 'foot',
      inStockOnly: true,
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({ filterText });
  }

  handleInStockChange(inStockOnly) {
    this.setState({ inStockOnly });
  }

  render() {
    const { products } = this.props;
    const { filterText, inStockOnly } = this.state;

    return (
      <>
        {JSON.stringify(this.state)}
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={products}
          filterText={filterText}
          inStockOnly={inStockOnly}
        />
      </>
    );
  }
}

export default FilterableProductTable;
