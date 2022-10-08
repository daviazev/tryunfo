import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Input.css';

function Input({ placeholder, testid, type, inputTitle, id }) {
  return (
    <div className="input-div">
      <label htmlFor={ id }>
        { inputTitle }
      </label>
      <input
        placeholder={ placeholder }
        data-testid={ testid }
        type={ type }
        id={ id }
      />
    </div>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  inputTitle: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Input;
