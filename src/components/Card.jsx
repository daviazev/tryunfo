import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    const isCardTrunfoTrue = () => {
      if (!cardTrunfo) {
        return null;
      }
      return <div data-testid="trunfo-card">Super Trunfo</div>;
    };

    return (
      <div className="card" data-testid="name-card">
        { cardName }
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <div data-testid="description-card">{cardDescription}</div>
        <div data-testid="attr1-card">{ cardAttr1 }</div>
        <div data-testid="attr2-card">{ cardAttr2 }</div>
        <div data-testid="attr3-card">{ cardAttr3 }</div>
        <div data-testid="rare-card">{ cardRare }</div>
        { isCardTrunfoTrue() }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
