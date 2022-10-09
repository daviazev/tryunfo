import PropTypes from 'prop-types';
import React, { useState } from 'react';
import appContext from './Context';

function Provider({ children }) {
  const [name, setName] = useState('Cristiano');
  const [description, setDescription] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum justo at aliquam mollis. Etiam eros tellus, blandit eget dui consequat, rutrum sodales diam. Curabitur consequat ipsum ut turpis consequat, a ullamcorper mauris tempus. In in volutpat nunc. Maecenas ac accumsan arcu, nec rhoncus velit. Aliquam vitae ante sodales, semper l');
  const [attr1, setAttr1] = useState(80);
  const [attr2, setAttr2] = useState(75);
  const [attr3, setAttr3] = useState(60);
  const [attr4, setAttr4] = useState(60);
  const [attr5, setAttr5] = useState(60);
  const [attr6, setAttr6] = useState(60);
  const [imageUrl, setImageUrl] = useState('https://static.poder360.com.br/2021/08/photo_2021-08-27_15-23-08.jpg');
  const [isSuperTrunfo, setIsSuperTrunfo] = useState(true);
  const [rarity, setRarity] = useState('Raro');

  const context = {
    name,
    setName,
    description,
    setDescription,
    attr1,
    attr2,
    attr3,
    attr4,
    attr5,
    attr6,
    setAttr1,
    setAttr2,
    setAttr3,
    setAttr4,
    setAttr5,
    setAttr6,
    imageUrl,
    setImageUrl,
    isSuperTrunfo,
    setIsSuperTrunfo,
    rarity,
    setRarity,
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
