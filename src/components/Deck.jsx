import React, { useContext } from 'react';
import appContext from '../context/Context';
import logo from '../images/logo.svg';

const xablau = '.....................';

function Deck() {
  const { deck } = useContext(appContext);

  // console.log(deck);

  const rarityClass = (rarity) => {
    if (rarity === 'Normal') return 'normal';
    if (rarity === 'Raro') return 'rare';
    return 'very-rare';
  };

  const nameClass = (rarity) => {
    if (rarity === 'Normal') return 'normal-card-name';
    if (rarity === 'Raro') return 'rare-card-name';
    return 'very-rare-card-name';
  };

  const descritionClass = (rarity) => {
    if (rarity === 'Normal') return 'normal-card-description';
    if (rarity === 'Raro') return 'rare-card-description';
    return 'very-rare-card-description';
  };

  const attrValueClass = (rarity) => {
    if (rarity === 'Normal') return 'normal-attr-value';
    if (rarity === 'Raro') return 'rare-attr-value';
    return 'very-rare-attr-value';
  };

  return (
    <div>
      <h1>Deck de cartas</h1>
      {deck.map((obj) => (
        <div className={ rarityClass(obj.rarity) } key={ obj.id }>
          <div>
            <h2 className={ nameClass(obj.rarity) }>{obj.name}</h2>
            <img
              className="card-image"
              src={ obj.imageUrl }
              alt={ `card of ${obj.name}` }
            />
            { obj.isSuperTrunfo ? (
              <img src={ logo } className="super-trunfo" alt="super trunfo icon" />
            ) : null}
          </div>
          <span className={ descritionClass(obj.rarity) }>{obj.description}</span>
          <div className="preview-attrs">
            <div className="card-attr-div">
              <span>attr1</span>
              <span>{xablau}</span>
              <span className={ attrValueClass(obj.rarity) }>{ obj.attr1 }</span>
            </div>

            <div className="card-attr-div">
              <span>attr2</span>
              <span>{xablau}</span>
              <span className={ attrValueClass(obj.rarity) }>{ obj.attr2 }</span>
            </div>

            <div className="card-attr-div">
              <span>attr3</span>
              <span>{xablau}</span>
              <span className={ attrValueClass(obj.rarity) }>{ obj.attr3 }</span>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}

export default Deck;
