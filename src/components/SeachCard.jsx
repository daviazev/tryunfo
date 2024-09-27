/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useEffect, useState } from 'react';
import appContext from '../context/Context';
import '../styles/SearchCard.css';

function SearchCard() {
  const [rariryValue, setRarityValue] = useState('Todas');

  const {
    setIsFiltering, setNameFilt, deck, secondDeck, setSecondDeck,
  } = useContext(appContext);

  // console.log('secondDeck', secondDeck);
  // console.log('deck', deck);

  useEffect(() => {
    console.log(rariryValue);
    if (rariryValue !== 'Todas') {
      // console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
      const filtering = deck.filter(({ rarity }) => rarity === rariryValue);
      // console.log('dpppppppppppppp', filtering);
      setSecondDeck(filtering);
      setIsFiltering(true);
    } else {
      setIsFiltering(false);
    }
  }, [rariryValue]);

  const searchCard = (value) => {
    if (value.length > 0) {
      setIsFiltering(true);
      setNameFilt(value);
    } else {
      setIsFiltering(false);
    }
  };

  // const rarityFilter = (value = 'Todas') => {
  //   console.log(value);
  //   if (value !== 'Todas') {
  //     const filtering = deck.filter(({ rarity }) => rarity === value);
  //     // console.log('dpppppppppppppp', filtering);
  //     setSecondDeck(filtering);
  //     setIsFiltering(true);
  //   } else {
  //     setIsFiltering(false);
  //   }
  // };

  return (
    <div className="search-main-content">
      <h1>Todas as cartas</h1>
      <div className="search-container">
        <h3>Filtros de busca</h3>
        <input
          onChange={ ({ target: { value } }) => searchCard(value) }
          className="search-by-name"
          placeholder="Nome da Carta"
          type="text"
        />
        <select
          className="search-by-rarity"
          onClick={ ({ target: { value } }) => setRarityValue(value) }
        >
          <option>Todas</option>
          <option>Normal</option>
          <option>Raro</option>
          <option>Muito raro</option>
        </select>
        <div>
          <label htmlFor="super-trunfo-filt">Super Trunfo</label>
          <input type="checkbox" id="super-trunfo-filt" />
        </div>
      </div>
    </div>
  );
}

export default SearchCard;
