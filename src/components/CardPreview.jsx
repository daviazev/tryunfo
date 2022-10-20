import React, { useContext, useEffect, useState } from 'react';
import appContext from '../context/Context';

import '../styles/CardPreview.css';

const xablau = '.....................';

function CardPreview() {
  const [rareClass, setRareClass] = useState('normal');
  const [cardNameClass, setCardNameClass] = useState('normal-card-name');
  const [cardDescription, setCardDescription] = useState('normal-card-description');
  const [arrtValue, setAttrValue] = useState('normal-attr-value');

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

  useEffect(() => {
    if (rarity === 'Normal') {
      setRareClass('normal');
      setCardNameClass('normal-card-name');
      setCardDescription('normal-card-description');
      setAttrValue('normal-attr-value');
    }

    if (rarity === 'Raro') {
      setRareClass('rare');
      setCardNameClass('rare-card-name');
      setCardDescription('rare-card-description');
      setAttrValue('rare-attr-value');
    }

    if (rarity === 'Muito raro') {
      setRareClass('very-rare');
      setCardNameClass('very-rare-card-name');
      setCardDescription('very-rare-card-description');
      setAttrValue('very-rare-attr-value');
    }
    console.log(rareClass);
  }, [rarity]);

  return (
    <div className="card-preview-main">
      <h1>Pré-visualização</h1>
      <div className={ rareClass }>
        <h2 className={ cardNameClass }>{name}</h2>
        <img className="card-image" src={ imageUrl } alt={ imageUrl } />
        <span className={ cardDescription }>{description}</span>
        <div className="preview-attrs">
          <div className="card-attr-div">
            <span>attr1</span>
            <span className="teste">{xablau}</span>
            <span className={ arrtValue }>{ attr1 }</span>
          </div>

          <div className="card-attr-div">
            <span>attr2</span>
            <span className="teste">{xablau}</span>
            <span className={ arrtValue }>{ attr2 }</span>
          </div>

          <div className="card-attr-div">
            <span>attr3</span>
            <span className="teste">{xablau}</span>
            <span className={ arrtValue }>{ attr3 }</span>
          </div>

        </div>
        <div className="card-rarity-div">
          { isSuperTrunfo ? <span>Super Trunfo</span> : null}
        </div>
      </div>
    </div>
  );
}

export default CardPreview;
