import React, { useContext } from 'react';
import appContext from '../context/Context';

import '../styles/CardPreview.css';

function CardPreview() {
  const {
    name,
    description,
    attr1,
    attr2,
    attr3,
    imageUrl,
    rarity,
    isSuperTrunfo,
  } = useContext(appContext);
  return (
    <div className="card-preview">
      <h3>{name}</h3>
      <img src={ imageUrl } alt={ imageUrl } />
      <p>{description}</p>
      <span>{attr1}</span>
      <span>{attr2}</span>
      <span>{attr3}</span>
      <span>{rarity}</span>
      { isSuperTrunfo ? 'Super Trunfo' : null}
    </div>
  );
}

export default CardPreview;
