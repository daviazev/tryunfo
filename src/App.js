import React, { useEffect, useState } from 'react';
import Form from './components/Form';
import CardPreview from './components/CardPreview';
import Deck from './components/Deck';
import SearchCard from './components/SeachCard';

import logo from './images/logo.svg';

import './styles/App.css';

const MIN_SIZE = 950;

function App() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > MIN_SIZE);

  useEffect(() => {
    const xablei = () => {
      setIsDesktop(window.innerWidth > MIN_SIZE);
    };

    window.addEventListener('resize', xablei);

    return () => {
      window.removeEventListener('resize', xablei);
    };
  }, []);

  if (!isDesktop) {
    return (
      <div className="not-desktop">
        <h2>Ah não :(</h2>
        <p>
          A tela do seu dispositivo é muito pequena e ainda não fizemos uma versão mobile.
          Use uma tela com a largura maior que 950 pixels para usar o app.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="logo-content">
        <img src={ logo } alt="tryunfo logo" />
      </div>
      <div className="main">
        <div className="new-card-section">
          <Form />
          <CardPreview />
        </div>
      </div>
      <div className="search-and-deck">
        <SearchCard />
        <Deck />
      </div>
    </>
  );
}

export default App;
