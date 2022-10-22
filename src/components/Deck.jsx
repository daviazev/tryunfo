import React, { useContext } from 'react';
import appContext from '../context/Context';

function Deck() {
  const { deck } = useContext(appContext);

  console.log(deck);

  return (
    <div>
      <h1>Deck de cartas</h1>
      {deck.map((obj) => (
        <div key={ obj.name }>
          <img src={ obj.imageUrl } alt="" />
          <h1>{obj.name}</h1>
        </div>
      ))}
    </div>
  );
}

export default Deck;
