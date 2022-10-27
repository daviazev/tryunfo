/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import '../styles/SearchCard.css';

function SearchCard() {
  return (
    <div className="search-main-content">
      <h1>Todas as cartas</h1>
      <div className="search-container">
        <h3>Filtros de busca</h3>
        <input
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
