import React from 'react';
import Input from './Input';

import '../styles/Form.css';

function Form() {
  return (
    <form className="form">
      <Input
        inputTitle="Nome"
        placeholder="Nome de carta"
        testid="name-input"
        type="text"
        id="name-input"
        nameClass="input-div"
        inputClass="name-input"
      />
      <div className="input-div ">
        <label htmlFor="description-input">
          Descrição
        </label>
        <textarea
          data-testid="description-input"
          placeholder="Descrição da carta"
          id="description-input"
          cols="10"
          rows="5"
        />
      </div>
      <div className="attr-div-main">
        <Input
          inputTitle="Atributo 1"
          testid="attr1-input"
          type="number"
          id="attr1-input"
          nameClass="attr-div"
          inputClass="attr-input"
        />

        <Input
          inputTitle="Atributo 2"
          testid="attr2-input"
          type="number"
          id="attr2-input"
          nameClass="attr-div"
          inputClass="attr-input"
        />

        <Input
          inputTitle="Atributo 3"
          testid="attr3-input"
          type="number"
          id="attr3-input"
          nameClass="attr-div"
          inputClass="attr-input"
        />

        <Input
          inputTitle="Imagem"
          testid="image-input"
          type="text"
          id="image-input"
          nameClass="attr-div"
          inputClass="attr-input"
          placeholder="url da imagem"
        />
      </div>

      <div className="input-div">
        <label htmlFor="rare-input">
          Raridade
        </label>
        <select
          data-testid="rare-input"
          id="rare-input"
        >
          <option>Normal</option>
          <option>Raro</option>
          <option>Super Raro</option>
        </select>
      </div>
      <Input
        inputTitle="Super Trunfo"
        type="checkbox"
      />
      <button
        data-testid="save-button"
        type="button"
      >
        Salvar
      </button>
    </form>
  );
}

export default Form;
