import PropTypes from 'prop-types';
import React, { useState } from 'react';
import appContext from './Context';

const cristiano = `Cristiano Ronaldo dos Santos Aveiro é um futebolista português 
que atua como extremo-esquerdo ou ponta de lança. Atualmente joga pelo Manchester 
United e por Portugal.`;

function Provider({ children }) {
  const [name, setName] = useState('Cristiano');
  const [description, setDescription] = useState(cristiano);
  const [attr1, setAttr1] = useState(0);
  const [attr2, setAttr2] = useState(0);
  const [attr3, setAttr3] = useState(0);
  const [imageUrl, setImageUrl] = useState('https://static.poder360.com.br/2021/08/photo_2021-08-27_15-23-08.jpg');
  const [isSuperTrunfo, setIsSuperTrunfo] = useState(false);
  const [rarity, setRarity] = useState('Normal');
  const [deck, setDeck] = useState([]);
  const [id, setId] = useState(0);

  const context = {
    name,
    setName,
    description,
    setDescription,
    attr1,
    attr2,
    attr3,
    setAttr1,
    setAttr2,
    setAttr3,
    imageUrl,
    setImageUrl,
    isSuperTrunfo,
    setIsSuperTrunfo,
    rarity,
    setRarity,
    deck,
    setDeck,
    id,
    setId,
  };

  return (
    <appContext.Provider value={ context }>
      {children}
    </appContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
