import React from 'react'
import ReactDOM from 'react-dom/client'
import { Link } from 'react-router-dom'
import './styles.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

export default function Main() {
  return(
    <div className="selection" style={{backgroundColor: 'black'}}>
      <Link to="/result/korean" className="button">Korean</Link>
      <Link to="/result/japanese" className="button">Japanese</Link>
      <Link to="/result/western" className="button">Western</Link>
    </div>
  )
}

const contents = ReactDOM.createRoot(document.getElementById('contents'))
contents.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

reportWebVitals()
