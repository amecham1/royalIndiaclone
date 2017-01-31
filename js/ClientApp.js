import React from 'react'
import { render } from 'react-dom'
import '../js/scss/reset.scss'
import '../js/scss/base.scss'
import HeaderBar from './components/header/HeaderBar'

const App = React.createClass({
  render () {
    return (
      <div>
        <HeaderBar />
      </div>
    )
  }
})

render(<App />, document.getElementById('app'))
