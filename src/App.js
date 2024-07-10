import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from '.';
import Result from './Result';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={ <Main/> } />
        <Route path="/result/:meal" component={ <Result/> } />
      </Routes>
    </Router>
  )
}

export default App;
