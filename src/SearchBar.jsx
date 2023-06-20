/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleInStockChange(e) {
    this.props.onStockChange(e.target.checked);
  }

  render() {
    const { filterText, inStockOnly } = this.props;

    return (
      <div className="mb-3">
        <div className="form-group mb-0">
          <input
            type="text"
            className="form-control"
            placeholder="recherche"
            onChange={this.handleFilterTextChange}
            value={filterText}
          />
        </div>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="stock"
            checked={inStockOnly}
            onChange={this.handleInStockChange}
          />
          <label htmlFor="stock" className="form-check-label">
            produit en stock seulement
          </label>
        </div>
      </div>
    );
  }
}

export default SearchBar;
