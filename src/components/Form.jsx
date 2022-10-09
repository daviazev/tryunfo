/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import Input from './Input';

import '../styles/Form.css';
import appContext from '../context/Context';

function Form() {
  const {
    setName,
    setDescription,
    setAttr1,
    setAttr2,
    setAttr3,
    setAttr4,
    setAttr5,
    setAttr6,
    setImageUrl,
    setRarity,
    setIsSuperTrunfo,
    isSuperTrunfo,
  } = useContext(appContext);

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
        callback={ setName }
      />
      <div className="input-div">
        <label htmlFor="description-input">
          Descrição
        </label>
        <textarea
          onChange={ ({ target: { value } }) => setDescription(value) }
          data-testid="description-input"
          placeholder="Descrição da carta"
          id="description-input"
          cols="10"
          rows="5"
        />
      </div>
      <div className="attr-div-main">
        <Input
          inputTitle="ATT"
          testid="attr1-input"
          type="number"
          id="attr1-input"
          nameClass="input-div"
          inputClass="attr-input"
          callback={ setAttr1 }
        />

        <Input
          inputTitle="TEC"
          testid="attr2-input"
          type="number"
          id="attr2-input"
          nameClass="input-div"
          inputClass="attr-input"
          callback={ setAttr2 }
        />

        <Input
          inputTitle="TAC"
          testid="attr3-input"
          type="number"
          id="attr3-input"
          nameClass="input-div"
          inputClass="attr-input"
          callback={ setAttr3 }
        />

        <Input
          inputTitle="DEF"
          testid="attr4-input"
          type="number"
          id="attr4-input"
          nameClass="input-div"
          inputClass="attr-input"
          callback={ setAttr4 }
        />

        <Input
          inputTitle="CRE"
          testid="attr5-input"
          type="number"
          id="attr5-input"
          nameClass="input-div"
          inputClass="attr-input"
          callback={ setAttr5 }
        />

        <Input
          inputTitle="LCK"
          testid="attr6-input"
          type="number"
          id="attr6-input"
          nameClass="input-div"
          inputClass="attr-input"
          callback={ setAttr6 }
        />

        <Input
          inputTitle="Imagem"
          testid="image-input"
          type="text"
          id="image-input"
          nameClass="input-div"
          inputClass="attr-input"
          placeholder="url da imagem"
          callback={ setImageUrl }
        />
      </div>

      <div className="input-div">
        <label htmlFor="rare-input">
          Raridade
        </label>
        <select
          data-testid="rare-input"
          id="rare-input"
          className="select-input"
          onChange={ ({ target: { value } }) => setRarity(value) }
        >
          <option>Normal</option>
          <option>Raro</option>
          <option>Muito raro</option>
        </select>
      </div>
      <div className="checkbox-div">
        <label htmlFor="trunfo-input">
          Super Trunfo
        </label>
        <input
          id="trunfo-input"
          data-testid="trunfo-input"
          type="checkbox"
          onClick={ () => setIsSuperTrunfo(!isSuperTrunfo) }
        />
      </div>
      <button
        data-testid="save-button"
        type="button"
        className="save-button"
      >
        SALVAR
      </button>
    </form>
  );
}

export default Form;
