import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Input.css';

function Input(props) {
  const {
    placeholder, testid, type, inputTitle, id, nameClass, inputClass, callback,
  } = props;
  return (
    <div className={ nameClass }>
      <label className="form-label" htmlFor={ id }>
        { inputTitle }
      </label>
      <input
        placeholder={ placeholder }
        data-testid={ testid }
        type={ type }
        id={ id }
        className={ inputClass }
        onChange={ ({ target: { value } }) => callback(value) }
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
  nameClass: PropTypes.string.isRequired,
  inputClass: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
};

export default Input;
