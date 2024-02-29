import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import PropDrilling from './PropDrilling'
import CounterContextAPI from './CounterContextAPI'

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <PropDrilling /> */}
    <CounterContextAPI />
  </React.StrictMode>,
  document.getElementById('root')
)
