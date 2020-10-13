import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PageView } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <PageView />
    </BrowserRouter>
  );
};

export default App;
