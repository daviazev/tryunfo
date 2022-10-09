import PropTypes from 'prop-types';
import React, { useState } from 'react';
import appContext from './Context';

function Provider({ children }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [attr1, setAttr1] = useState(0);
  const [attr2, setAttr2] = useState(0);
  const [attr3, setAttr3] = useState(0);
  const [imageUrl, setImageUrl] = useState('');
  const [isSuperTrunfo, setIsSuperTrunfo] = useState(false);

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
