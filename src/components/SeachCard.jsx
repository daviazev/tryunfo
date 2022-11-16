/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import appContext from '../context/Context';
import '../styles/SearchCard.css';

function SearchCard() {
  const { setIsFiltering, setNameFilt } = useContext(appContext);

  const searchCard = (value) => {
    if (value.length > 0) {
      setIsFiltering(true);
      setNameFilt(value);
    } else {
      setIsFiltering(false);
    }
  };

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
        <select className="search-by-rarity">
          <option>Raridade</option>
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
