import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { secondary } from 'constants/styles';

export default class DiscountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      discount: props.discount,
    };
    this.discount = null;
  }

  onApply() {
    const { onApply } = this.props;
    const { discount } = this.state;
    onApply(discount);
  }

  onRemove() {
    const { onApply } = this.props;
    this.setState({ discount: 0 });
    onApply(0);
  }

  onInputChange() {
    const { value } = this.discount;
    if (value === '0') {
      this.setState({ discount: 0 });
    } else {
      this.setState({ discount: Number(this.discount.value) || '' });
    }
  }

  canApply() {
    const { discount } = this.state;
    const { discount: propsDiscount } = this.props;
    return discount && (!isNaN(discount) || discount === 0) && discount !== propsDiscount;
  }

  canRemove() {
    const { discount } = this.props;
    return !!discount;
  }

  render() {
    const { discount } = this.state;
    const canApply = this.canApply();
    const canRemove = this.canRemove();

    return (
      <form className="container">
        <div className="row">
          <div className="input-field col s6 m6 l6">
            <input
              id="discount"
              max="100"
              min="0"
              onChange={this.onInputChange.bind(this)}
              ref={(i) => { this.discount = i; }}
              type="number"
              value={discount}
            />
            <label htmlFor="discount">Discount %</label>
          </div>
        </div>
        <div className="row center">
          <div className="col s6 m6 l6">
            <button
              className={`btn waves-effect waves-light ${secondary} ${canApply ? '' : 'disabled'}`}
              onClick={this.onApply.bind(this)}
              type="button"
            >
              Apply
            </button>
            <button
              className={`btn waves-effect waves-light ${secondary} ${canRemove ? '' : 'disabled'}`}
              onClick={this.onRemove.bind(this)}
              type="button"
            >
              Remove
            </button>
          </div>
        </div>
      </form>
    );
  }
}

DiscountForm.propTypes = {
  discount: PropTypes.number.isRequired,
  onApply: PropTypes.func.isRequired,
};
