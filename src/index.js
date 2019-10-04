import React from 'react'
import ReactDOM from 'react-dom'
import {Email, Table} from './components'
import './styles.css'

const App = () => {
  return (
    <div>
      <Email />
      <Table />
    </div>
  )
}

const mountNode = document.getElementById('app')
ReactDOM.render(<App />, mountNode)
