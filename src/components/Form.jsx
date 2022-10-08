import React from 'react';
import Input from './Input';

function Form() {
  return (
    <div>
      <Input
        inputTitle="Nome"
        placeholder="Nome de carta"
        testid="name-input"
        type="text"
        id="name-input"
      />
    </div>
  );
}

export default Form;
