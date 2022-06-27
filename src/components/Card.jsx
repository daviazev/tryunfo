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
      return <p className="attributes" data-testid="trunfo-card">Super Trunfo</p>;
    };

    return (
      <section className="card-section">
        <div className="card" data-testid="name-card">
          <h3 className="card-name">{ cardName }</h3>
          <img src={ cardImage } alt={ cardName } data-testid="image-card" />
          <p
            id="description-card"
            className="attributes"
            data-testid="description-card"
          >
            {cardDescription}
          </p>
          <div className="attributes">
            Força.....................................
            <p className="attributes inline" data-testid="attr1-card">{ cardAttr1 }</p>
          </div>

          <div className="attributes">
            Velocidade.............................
            <p className="attributes inline" data-testid="attr2-card">{ cardAttr2 }</p>
          </div>

          <div className="attributes">
            Inteligencia............................
            <p className="attributes inline" data-testid="attr3-card">{ cardAttr3 }</p>
          </div>
          <p className="attributes" data-testid="rare-card">{ cardRare }</p>
          { isCardTrunfoTrue() }
        </div>
      </section>
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
