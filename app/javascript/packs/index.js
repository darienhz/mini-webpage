import React from 'react'
import ReactDOM from 'react-dom'
import Home from '../components/Home/Home'
import 'bootstrap/dist/css/bootstrap.css'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home/>,
    document.body.appendChild(document.createElement('div'))
  )
})