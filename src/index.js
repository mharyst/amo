import React from 'react'
import ReactDOM from 'react-dom'
import {Email, Table} from './components'
import css from './styles.css'

const App = () => (
  <div className={css.container}>
    <Email />
    <Table />
  </div>
)

const mountNode = document.getElementById('app')
ReactDOM.render(<App />, mountNode)
