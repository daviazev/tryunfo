import React, { useContext } from 'react';
import appContext from '../context/Context';

function Deck() {
  const { deck } = useContext(appContext);

  console.log(deck);

  const setClass = (rarity) => {
    if (rarity === 'Normal') return 'normal';
    if (rarity === 'Raro') return 'rare';
    return 'very-rare';
  };

  return (
    <div>
      <h1>Deck de cartas</h1>
      {deck.map((obj) => (
        <div className={ setClass(obj.rarity) } key={ obj.id }>
          <img src={ obj.imageUrl } alt="" />
          <h1>{obj.name}</h1>
        </div>
      ))}
    </div>
  );
}

export default Deck;
