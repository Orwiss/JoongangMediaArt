import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from './Main'
import Result from './Result'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <Main/> } />
        <Route path="/result/:meal" element={ <Result/> } />
      </Routes>
    </Router>
  )
}

export default App