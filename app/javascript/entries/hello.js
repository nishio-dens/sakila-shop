import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export class Hello extends React.Component {
  render () {
    return (
      <div className="hello">
        Hello React
      </div>
    )
  }
}
document.addEventListener('DOMContentLoaded', e => {
  ReactDOM.render(<Hello />, document.body.appendChild(document.createElement('div')))
})
