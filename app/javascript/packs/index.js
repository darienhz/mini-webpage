import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.css'

const Hello = props => (
  <div>Hello #{props.name}</div>
)

Hello.defaultProps = {
  name: 'Darien'
}

Hello.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="React"/>,
    document.body.appendChild(document.createElement('div'))
  )
})