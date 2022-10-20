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
      <h2 className="card-name">{name}</h2>
      <img className="card-image" src={ imageUrl } alt={ imageUrl } />
      <span className="card-description">{description}</span>
      <div className="card-attr-div-main">
        <div className="card-attr-div">
          <span>ATT </span>
          <span className="teste">--------</span>
          <span>{ attr1 }</span>
        </div>

        <div className="card-attr-div">
          <span>TEC</span>
          <span className="teste">--------</span>
          <span>{ attr2 }</span>
        </div>

        <div className="card-attr-div">
          <span>TAC</span>
          <span className="teste">--------</span>
          <span>{ attr3 }</span>
        </div>

      </div>
      <div className="card-rarity-div">
        <span>{rarity}</span>
        { isSuperTrunfo ? <span>Super Trunfo</span> : null}
      </div>
    </div>
  );
}

export default CardPreview;
