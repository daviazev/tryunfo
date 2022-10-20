import React from 'react';
import Form from './components/Form';
import CardPreview from './components/CardPreview';

import logo from './images/logo.svg';

import './styles/App.css';

function App() {
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
    </>
  );
}

export default App;
