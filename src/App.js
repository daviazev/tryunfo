import React from 'react';
import Form from './components/Form';
import CardPreview from './components/CardPreview';

function App() {
  return (
    <div>
      <h1>Tryunfo</h1>
      <div className="main">
        <Form />
        <CardPreview />
      </div>
    </div>
  );
}

export default App;
