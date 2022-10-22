/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext } from 'react';
import Input from './Input';

import '../styles/Form.css';
import appContext from '../context/Context';

function Form() {
  const {
    name,
    description,
    attr1,
    attr2,
    attr3,
    imageUrl,
    rarity,
    setName,
    setDescription,
    setAttr1,
    setAttr2,
    setAttr3,
    setImageUrl,
    setRarity,
    setIsSuperTrunfo,
    isSuperTrunfo,
    setDeck,
    deck,
    id,
    setId,
  } = useContext(appContext);

  console.log(rarity);

  const saveCard = () => {
    const cardToSave = {
      id, name, description, attr1, attr2, attr3, imageUrl, rarity, isSuperTrunfo,
    };

    setDeck([...deck, cardToSave]);

    setId(id + 1);
  };

  return (
    <div className="div-form-main">
      <h1>Adicione uma nova carta</h1>
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
            maxLength="170"
          />
        </div>
        <div className="attr-div-main">
          <Input
            inputTitle="ATT"
            testid="attr1-input"
            type="number"
            id="attr1-input"
            nameClass="xablau"
            inputClass="attr-input"
            callback={ setAttr1 }
          />

          <Input
            inputTitle="TEC"
            testid="attr2-input"
            type="number"
            id="attr2-input"
            nameClass="xablau"
            inputClass="attr-input"
            callback={ setAttr2 }
          />

          <Input
            inputTitle="TAC"
            testid="attr3-input"
            type="number"
            id="attr3-input"
            nameClass="xablau"
            inputClass="attr-input"
            callback={ setAttr3 }
          />

          <span>pontos restantes</span>

          <Input
            inputTitle="Imagem"
            testid="image-input"
            type="text"
            id="image-input"
            nameClass="xablau"
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
          <div>
            <input
              id="trunfo-input"
              data-testid="trunfo-input"
              type="checkbox"
              onClick={ () => setIsSuperTrunfo(!isSuperTrunfo) }
            />
            <label htmlFor="trunfo-input">
              Super Trunfo
            </label>
          </div>
          <button
            onClick={ () => saveCard() }
            data-testid="save-button"
            type="button"
            className="save-button"
          >
            SALVAR
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
