import { secondary } from 'constants/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const initialState = {
  author: '',
  price: 0,
  title: '',
};

export default class AddListingForm extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.title = null;
    this.author = null;
    this.price = null;
  }

  onInputChange(input) {
    const { value } = this[input];
    this.setState({ [input]: value });

    if (isNaN(value)) {
      if (value && value.length) {
        this.validate(input);
      } else {
        this.invalidate(input);
      }
    } else if (value && value > 0) {
      this.validate(input);
    } else {
      this.invalidate(input);
    }
  }

  onAddListing() {
    const { onAddListing } = this.props;
    const { title, author, price } = this.state;
    onAddListing({ title, author, price: Number(price) });
    this.resetForm();
  }

  resetForm() {
    this.setState(initialState);
    this.author.classList.remove('valid');
    this.title.classList.remove('valid');
    this.price.classList.remove('valid');
  }

  validate(input) {
    this[input].classList.remove('invalid');
    this[input].classList.add('valid');
  }

  invalidate(input) {
    this[input].classList.remove('valid');
    this[input].classList.add('invalid');
  }

  isButtonEnabled() {
    const { author, price, title } = this.state;
    return author && price > 0 && title;
  }

  render() {
    const { author, price, title } = this.state;
    const isButtonEnabled = this.isButtonEnabled();

    return (
      <form className="container">
        <div className="row">
          <div className="input-field col s12 m12 l12">
            <input
              id="title"
              onChange={this.onInputChange.bind(this, 'title')}
              ref={(i) => { this.title = i; }}
              type="text"
              value={title}
            />
            <label htmlFor="title">Title</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s10 m10 l10">
            <input
              id="author"
              onChange={this.onInputChange.bind(this, 'author')}
              ref={(i) => { this.author = i; }}
              type="text"
              value={author}
            />
            <label htmlFor="author">Author</label>
          </div>
          <div className="input-field col s2 m2 l2">
            <input
              id="price"
              min="0"
              onChange={this.onInputChange.bind(this, 'price')}
              ref={(i) => { this.price = i; }}
              type="number"
              value={price}
            />
            <label htmlFor="price">Price</label>
          </div>
        </div>
        <div className="row center">
          <div className="col s12 m12 l12">
            <button
              className={`btn waves-effect waves-light ${secondary} ${isButtonEnabled ? '' : 'disabled'}`}
              onClick={this.onAddListing.bind(this)}
              type="button"
            >
              Add
              <i className="material-icons right">add</i>
            </button>
          </div>
        </div>
      </form>
    );
  }
}

AddListingForm.propTypes = {
  onAddListing: PropTypes.func.isRequired,
};
