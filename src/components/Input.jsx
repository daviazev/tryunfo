import React from 'react';

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

export default Input;
