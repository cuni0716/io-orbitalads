import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ author, haveDiscount, price, title, onRemove }) {
  return (
    <div className="card horizontal">
      <div className="card-stacked">
        <div className="card-content">
          <p className="card-title">{title}</p>
          <p className="card-author">{author}</p>
          <p className={`${haveDiscount ? 'red-text' : ''}`}>{`${price}€`}</p>
        </div>

        <i className="material-icons remove" onClick={onRemove}>close</i>
      </div>
    </div>
  );
}

Card.propTypes = {
  author: PropTypes.string.isRequired,
  haveDiscount: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};
