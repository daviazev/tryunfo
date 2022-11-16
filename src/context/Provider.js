import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
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
  const [secondDeck, setSecondDeck] = useState(deck);
  const [id, setId] = useState(0);
  const [isFiltering, setIsFiltering] = useState(false);

  const [nameFilt, setNameFilt] = useState('');

  // console.log(deck);
  // console.log(nameFilt);

  // console.log('>>>>>>>>>>>.', secondDeck);

  useEffect(() => {
    if (isFiltering) {
      const filtering = deck.filter((jog) => jog.name.toLowerCase()
        .includes(nameFilt.toLocaleLowerCase()));
      // console.log('+++++++++', filtering);
      // console.log('-----------', deck);
      setSecondDeck(filtering);
    } else {
      setSecondDeck([]);
    }
  }, [isFiltering]);

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
    isFiltering,
    setIsFiltering,
    setNameFilt,
    nameFilt,
    secondDeck,
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
