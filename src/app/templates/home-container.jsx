import { addBook, removeBook } from 'actions/books';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AddListingForm from 'components/add-listing-form';
import applyDiscount from 'actions/discount';
import Card from 'components/card';
import DiscountForm from 'components/discount-form';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class HomeContainer extends Component {
  componentDidMount() {
  }

  calculatePrice(price) {
    const { discount } = this.props;
    if (discount) {
      return Number((price - (discount / 100 * price)).toFixed(2));
    }

    return Number(price.toFixed(2));
  }

  handleAddItem(book) {
    const { addBookAction } = this.props;
    addBookAction(book);
  }

  handleApplyDiscount(discount) {
    const { applyDiscountAction } = this.props;
    applyDiscountAction(discount);
  }

  handleRemoveBook(index) {
    const { removeBookAction } = this.props;
    removeBookAction(index);
  }

  render() {
    const { books, discount } = this.props;

    return (
      <>
        <div className="row">
          <div className="col s12 m6 l6">
            <AddListingForm
              onAddListing={this.handleAddItem.bind(this)}
            />
          </div>
          <div className="col s12 m6 l6">
            <DiscountForm
              discount={discount}
              onApply={this.handleApplyDiscount.bind(this)}
            />
          </div>
        </div>
        <div className="row container">
          {books.map(({ author, price, title }, index) => (
            <Card
              key={index}
              author={author}
              price={this.calculatePrice(price)}
              title={title}
              haveDiscount={discount !== 0}
              onRemove={this.handleRemoveBook.bind(this, index)}
            />
          ))}
        </div>
      </>
    );
  }
}

HomeContainer.propTypes = {
  addBookAction: PropTypes.func.isRequired,
  applyDiscountAction: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      price: PropTypes.number,
      title: PropTypes.string,
    }),
  ).isRequired,
  discount: PropTypes.number.isRequired,
  removeBookAction: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books.list,
  discount: state.discount.value,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addBookAction: addBook,
  applyDiscountAction: applyDiscount,
  removeBookAction: removeBook,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
