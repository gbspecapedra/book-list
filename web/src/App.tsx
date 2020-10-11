import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PageView } from './components/layout';

const App = () => {
  return (
    <BrowserRouter>
      <PageView />
    </BrowserRouter>
  );
};

export default App;
